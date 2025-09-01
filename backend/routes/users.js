const express = require('express');
const router = express.Router();

// Placeholder users routes - will be implemented in Task 3
router.get('/', (req, res) => {
  res.json({
    message: 'Users routes - To be implemented in Task 3',
    routes: [
      'GET /api/users',
      'GET /api/users/:id',
      'PUT /api/users/:id',
      'DELETE /api/users/:id'
    ]
  });
});

module.exports = router;