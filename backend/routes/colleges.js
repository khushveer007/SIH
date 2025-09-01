const express = require('express');
const router = express.Router();

// Placeholder colleges routes - will be implemented in Task 6-7
router.get('/', (req, res) => {
  res.json({
    message: 'Colleges routes - To be implemented in Tasks 6-7',
    routes: [
      'GET /api/colleges',
      'POST /api/colleges',
      'GET /api/colleges/:id',
      'PUT /api/colleges/:id',
      'DELETE /api/colleges/:id'
    ]
  });
});

module.exports = router;