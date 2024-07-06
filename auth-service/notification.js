const express = require('express');
const {
  createNotification,
  getNotifications,
  getNotification,
  markAsRead
} = require('../controllers/notificationController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/notifications', authMiddleware, createNotification);
router.get('/notifications', authMiddleware, getNotifications);
router.get('/notifications/:id', authMiddleware, getNotification);
router.put('/notifications/:id', authMiddleware, markAsRead);

module.exports = router;
