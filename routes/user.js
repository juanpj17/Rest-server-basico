import { Router } from 'express';
import { userGet, userPost, userPut, userDelete } from '../controllers/user-control.js';

export const router = Router();

router.get('/', userGet);

router.put('/:id', userPut)

router.post('/', userPost)

router.delete('/', userDelete)

