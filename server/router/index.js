const {Router} = require('express');
const UserController = require('../controllers/user-controller');


const router = Router();


router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/activate/:link', UserController.activate);
router.post('/refresh', UserController.refresh);
router.get('/users', UserController.getUsers);


module.exports = router;
