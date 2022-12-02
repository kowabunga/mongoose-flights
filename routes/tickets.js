const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tickets');

router.get('/:id/tickets/new', ticketController.new);
router.post('/:id/tickets', ticketController.create);

module.exports = router;
