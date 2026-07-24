const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const auth = require('../middleware/auth');

// Public routes
router.post('/', leadController.createLead);

// Protected routes (Admin only)
router.get('/', auth, leadController.getLeads);
router.patch('/:id/status', auth, leadController.updateLeadStatus);

module.exports = router;