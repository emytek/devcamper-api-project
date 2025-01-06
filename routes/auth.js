const express = require('express');
const { register, login, getMe } = require('../controllers/auth');

const router = express.Router();
const { protect } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
// router
//   .route('/')
//   .get(advancedResults(User), getUsers)
//   .post(createUser);

// router
//   .route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;
