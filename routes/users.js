import express from 'express';
import { mainPage, createUserPage, editUserPage, createUser, getUser, getUsers, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router();

router.get('/', mainPage);

router.get('/users/add-users', createUserPage);

router.get('/users/edit-user/:id', editUserPage);

// all routes in here are starting with /users
router.get('/users', getUsers);

router.post('/users', createUser);

router.get('/users/:id', getUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', updateUser);

export default router;