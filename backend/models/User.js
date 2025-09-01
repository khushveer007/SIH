const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false // Don't include password in queries by default
  },
  role: {
    type: String,
    enum: ['student', 'college_agent', 'hr_recruiter'],
    required: [true, 'Please specify user role']
  },
  phone: {
    type: String,
    match: [/^[6-9]\d{9}$/, 'Please add a valid 10-digit phone number']
  },
  profile: {
    // Student specific fields
    marks: {
      type: Number,
      min: [0, 'Marks cannot be negative'],
      max: [100, 'Marks cannot exceed 100']
    },
    preferredLocation: String,
    skills: [String],
    graduationYear: {
      type: Number,
      min: [2020, 'Graduation year must be 2020 or later'],
      max: [2030, 'Graduation year cannot be more than 2030']
    },

    // College Agent specific fields
    collegeName: String,
    collegeLocation: String,
    designation: String,

    // HR/Recruiter specific fields
    companyName: String,
    companyLocation: String,
    jobTitle: String
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  lastLogin: Date,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for better query performance
// userSchema.index({ email: 1 }); // Removed - using unique: true instead
userSchema.index({ role: 1 });
userSchema.index({ 'profile.marks': -1 });
userSchema.index({ 'profile.preferredLocation': 1 });

// Virtual for user's full profile based on role
userSchema.virtual('profileSummary').get(function() {
  const profile = this.profile || {};

  switch (this.role) {
    case 'student':
      return {
        marks: profile.marks,
        preferredLocation: profile.preferredLocation,
        skills: profile.skills,
        graduationYear: profile.graduationYear
      };
    case 'college_agent':
      return {
        collegeName: profile.collegeName,
        collegeLocation: profile.collegeLocation,
        designation: profile.designation
      };
    case 'hr_recruiter':
      return {
        companyName: profile.companyName,
        companyLocation: profile.companyLocation,
        jobTitle: profile.jobTitle
      };
    default:
      return {};
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    // Hash password with cost of 12
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Update last login
userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save({ validateBeforeSave: false });
};

// Remove sensitive data when converting to JSON
userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.emailVerificationToken;
  delete userObject.emailVerificationExpires;
  delete userObject.passwordResetToken;
  delete userObject.passwordResetExpires;
  return userObject;
};

module.exports = mongoose.model('User', userSchema);