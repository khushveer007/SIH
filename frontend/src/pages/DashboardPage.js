import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip
} from '@mui/material';
import { Person, School, Business, Work } from '@mui/icons-material';

const DashboardPage = () => {
  // Mock user data - will be replaced with actual user data from context/API
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
    profile: {
      college: 'ABC University',
      course: 'Computer Science',
      year: 3
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'student':
        return <School />;
      case 'college_agent':
        return <Business />;
      case 'hr_recruiter':
        return <Work />;
      default:
        return <Person />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'student':
        return 'primary';
      case 'college_agent':
        return 'secondary';
      case 'hr_recruiter':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back, {user.name}! Here's your activity overview.
          </Typography>
        </Box>

        {/* Profile Card */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  alt={user.name}
                >
                  {user.name.charAt(0)}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {user.email}
                </Typography>
                <Chip
                  icon={getRoleIcon(user.role)}
                  label={user.role.replace('_', ' ').toUpperCase()}
                  color={getRoleColor(user.role)}
                  variant="outlined"
                />
                {user.role === 'student' && user.profile && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {user.profile.college}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.profile.course} - Year {user.profile.year}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                    >
                      <Person sx={{ mb: 1 }} />
                      Update Profile
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                    >
                      <Work sx={{ mb: 1 }} />
                      View Jobs
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                    >
                      <School sx={{ mb: 1 }} />
                      My Applications
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                    >
                      <Business sx={{ mb: 1 }} />
                      Settings
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity Placeholder */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your recent activities will appear here once the backend is connected.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default DashboardPage;