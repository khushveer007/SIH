# **Overview**

**Project Pathfinder** is a unified web platform designed to be a one-stop ecosystem for career and educational guidance in India. It systematically addresses the fragmented and confusing journey students face at critical decision-making points.

The core problem it solves is the disconnect between students seeking guidance, educational institutions seeking suitable candidates, and companies seeking fresh talent. By creating a centralized hub, Pathfinder provides a clear, data-driven pathway from academic choices to professional careers.

This platform is for three key user groups:

1. **Students:** From Class 10 choosing a stream to recent graduates seeking jobs.  
2. **College Agents:** Admissions officers looking to promote their programs and attract students.  
3. **HR / Recruiters:** Talent acquisition professionals aiming to efficiently hire interns and graduates.

Its value lies in creating a symbiotic ecosystem that saves time, reduces uncertainty, and fosters better matches between students, colleges, and employers.

# **Core Features**

### **1\. Unified Authentication System**

* **What it does:** Provides a single landing page with distinct registration and login pathways for Students, College Agents, and HR/Recruiters.  
* **Why it's important:** It's the gateway to the platform, segmenting users into their respective roles and ensuring they access the correct dashboard and toolset from the very beginning.  
* **How it works:** A user selects their role on the homepage. The system then directs them to a tailored registration form. Upon login, they are routed to their specific dashboard based on their assigned role.

### **2\. Student Dashboard & Tools**

* **What it does:** Serves as the central hub for students, offering a suite of tools for career exploration and planning.  
* **Why it's important:** This is the core of the platform, empowering students with the information and tools needed to make informed decisions.  
* **How it works:** The dashboard includes:  
  * **Quizzes:** Aptitude and interest tests that process user answers to suggest suitable streams (Science, Commerce, Arts) and career paths.  
  * **College Finder:** A searchable database of colleges, filterable by marks, location, stream, and entrance exam scores.  
  * **Exam Hub:** A repository of information and study materials (including PYQs) for competitive exams like JEE, NEET, and UPSC.  
  * **Jobs & Internships:** A portal to view and apply for opportunities posted by registered HRs.  
  * **CV Builder:** A template-driven tool to create, edit, and download a professional resume in PDF format.

### **3\. College Agent Dashboard**

* **What it does:** Allows educational institutions to manage their presence and connect with prospective students.  
* **Why it's important:** It provides colleges with a direct channel to market their programs and attract a targeted student audience.  
* **How it works:** The dashboard enables agents to:  
  * Upload and manage detailed information about their courses, including eligibility, cut-offs, and admission dates.  
  * Track analytics on how many students have viewed their programs.  
  * View a list of students who have expressed interest in or applied to their college.

### **4\. HR / Recruiter Dashboard**

* **What it does:** Provides a streamlined interface for companies to find and recruit talent.  
* **Why it's important:** It drastically improves recruitment efficiency by connecting employers directly with a filtered pool of qualified candidates.  
* **How it works:** The dashboard allows recruiters to:  
  * Post detailed job and internship listings.  
  * Search the student database and filter candidates by degree, skills, or marks.  
  * View and download the CVs of applicants.

### **5\. Notification System**

* **What it does:** Sends targeted, real-time alerts to all user types.  
* **Why it's important:** Keeps users engaged and informed about time-sensitive information, such as deadlines and new opportunities.  
* **How it works:** An automated system triggers notifications for events like new job postings (for students), new student applications (for colleges), and new candidate applications (for HRs).

# **User Experience**

### **User Personas**

1. **Student (Aarav):** A Class 12 student preparing for JEE. He is anxious about choosing the right engineering college and wants to find relevant study materials and internship opportunities.  
2. **College Agent (Mrs. Desai):** An admissions head for a university. She wants to increase applications for their niche programs and needs an efficient way to reach students who fit their eligibility criteria.  
3. **HR / Recruiter (Rahul):** A tech recruiter for a startup. He needs to hire interns with specific skills and wants to avoid sifting through hundreds of irrelevant resumes from generic job boards.

### **Key User Flows**

* **Student Career Discovery Flow:**  
  1. Aarav registers as a "Student."  
  2. He takes an interest quiz that suggests a career in Computer Science.  
  3. He navigates to the Exam Hub to download JEE PYQs.  
  4. He uses the College Finder, filtering by his expected JEE rank and "Computer Science" stream.  
  5. He shortlists five colleges and creates a professional CV using the CV Builder.  
* **HR Recruitment Flow:**  
  1. Rahul registers as an "HR / Recruiter."  
  2. He posts an internship for a "Frontend Developer," specifying "React.js" and "CSS" as required skills.  
  3. He uses the student search to find final-year Computer Science students with those skills listed on their profile.  
  4. He receives a notification that Aarav has applied and downloads his CV.

### **UI/UX Considerations**

* **Clean, Intuitive Interface:** The UI must be simple and uncluttered to avoid overwhelming users.  
* **Distinct Dashboards:** Each user role (Student, College, HR) must have a unique dashboard layout tailored to their specific needs and goals.  
* **Mobile-First Design:** The platform must be fully responsive and easy to use on mobile devices, as students are the primary audience.  
* **Guided Onboarding:** New users, especially students, should be guided through the platform's features with tooltips or a brief tutorial upon their first login.

# **Technical Architecture**

### **System Components**

* **Frontend:** A single-page application (SPA) built with **React.js**.  
* **Backend:** A RESTful API server built with **Node.js** and **Express.js**.  
* **Database:** **MongoDB** for its flexible, document-based structure, which is ideal for storing varied user profiles, course details, and job listings.

### **Data Models**

* **User:** { userId, email, password, role: ('student' | 'college' | 'hr') }  
* **StudentProfile:** { userId, name, class, stream, marks, skills, cvUrl, savedColleges\[\], savedJobs\[\] }  
* **College:** { collegeId, name, location, courses\[\], createdBy(userId) }  
* **Course:** { courseId, name, eligibility, cutOff, admissionDate }  
* **Job:** { jobId, title, description, skillsRequired, createdBy(userId) }  
* **Application:** { applicationId, jobId, studentId, status }

### **APIs and Integrations**

* **Internal API:**  
  * POST /api/auth/register  
  * POST /api/auth/login  
  * GET /api/colleges?stream=...\&location=...  
  * POST /api/colleges (College Agent only)  
  * GET /api/jobs  
  * POST /api/jobs (HR only)  
  * POST /api/jobs/:jobId/apply (Student only)  
* **No external API integrations** are required for the MVP to keep the scope manageable for a hackathon.

### **Infrastructure Requirements**

* **Hosting:**  
  * Frontend: **Vercel** or **Netlify** for easy CI/CD.  
  * Backend: **Heroku** or **Render**.  
  * Database: **MongoDB Atlas** (free tier).

# **Development Roadmap**

### **MVP Requirements (Hackathon Scope)**

The goal is to build a functional end-to-end flow that demonstrates the platform's core value.

1. **User Authentication:** Registration and login for all three user roles.  
2. **Basic Dashboards:** A simple, functional dashboard for each role upon login.  
3. **Core Feature for Each Role:**  
   * **College Agent:** Can create a college profile and add at least one course with details.  
   * **Student:** Can view and search the list of colleges and courses entered by agents.  
   * **HR / Recruiter:** Can post at least one job/internship listing.  
   * **Student:** Can view and search the list of jobs posted by recruiters.  
4. **No-frills UI:** Focus on functionality over aesthetics. Use a component library like Material-UI or Chakra UI to speed up development.

### **Future Enhancements (Post-Hackathon)**

1. **Phase 2:** Quizzes, CV Builder, Advanced Filtering (for colleges and jobs), and the Notification System.  
2. **Phase 3:** Higher Studies Guidance, Detailed Analytics for colleges/HRs, and Direct Messaging.  
3. **Phase 4:** AI-powered recommendation engine and community forums.

# **Logical Dependency Chain**

This is the recommended order of development to get to a demonstrable MVP as quickly as possible.

1. **Foundation (Build First):**  
   * Set up the backend server and connect to the database.  
   * Implement the User data model.  
   * Build the user registration and login API endpoints. This is the blocker for everything else.  
2. **Frontend Shell & Login:**  
   * Set up the React frontend.  
   * Build the landing/registration/login page that connects to the auth APIs.  
   * Create the basic, empty dashboard components for each of the three roles.  
3. **Data Creation (College & HR):**  
   * Build the backend models and API routes for Colleges and Jobs.  
   * In the frontend, build the forms for College Agents to add a course and for HRs to post a job. This allows you to start populating data.  
4. **Data Display (Student):**  
   * Build the frontend components for the student dashboard to fetch and display the list of colleges and jobs from the API.  
   * Add simple search/filter functionality on the frontend.

This sequence ensures that the features for creating data (by colleges/HRs) are built before the features for consuming that data (by students), creating a logical and testable workflow.

# **Risks and Mitigations**

* **Risk:** Scope creep; trying to build too many features during the hackathon (e.g., quizzes, CV builder).  
  * **Mitigation:** Strictly adhere to the defined MVP requirements. Assign one developer to each core user flow (Student, College, HR) to ensure parallel progress without deviation.  
* **Risk:** Lack of data to demonstrate the platform's functionality.  
  * **Mitigation:** Prepare a small set of mock JSON data for colleges, courses, and jobs. Write a simple seed script to populate the database before the final demo.  
* **Risk:** Frontend development takes longer than expected.  
  * **Mitigation:** Utilize a pre-built component library (e.g., Material-UI, Ant Design) to avoid writing CSS from scratch. Focus on functionality over pixel-perfect design for the MVP.

# **Appendix**

* **Research Findings:** The initial idea is based on the common pain points observed among students in India, as highlighted in the provided project briefing and workflow documents.  
* **Technical Specifications:** Standard REST principles will be followed for the API. All API responses will be in JSON format.