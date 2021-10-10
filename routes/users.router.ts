import {Router} from 'express';
import { getUsers, postUsers } from '../controllers/users.controllers';

const router = Router();

router.get('/', getUsers);
router.post('/', postUsers);

export default router;