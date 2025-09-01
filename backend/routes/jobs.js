const express = require('express');
const router = express.Router();

// Placeholder jobs routes - will be implemented in Task 6-8
router.get('/', (req, res) => {
  res.json({
    message: 'Jobs routes - To be implemented in Tasks 6-8',
    routes: [
      'GET /api/jobs',
      'POST /api/jobs',
      'GET /api/jobs/:id',
      'PUT /api/jobs/:id',
      'DELETE /api/jobs/:id'
    ]
  });
});

module.exports = router;