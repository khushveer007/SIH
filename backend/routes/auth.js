const express = require('express');
const router = express.Router();

// Placeholder auth routes - will be implemented in Task 3
router.get('/', (req, res) => {
  res.json({
    message: 'Auth routes - To be implemented in Task 3',
    routes: [
      'POST /api/auth/register',
      'POST /api/auth/login',
      'GET /api/auth/me',
      'POST /api/auth/logout'
    ]
  });
});

module.exports = router;