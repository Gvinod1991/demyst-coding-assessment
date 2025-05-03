
import { Router } from 'express';
import {
  example
} from '../controllers/balanceSheetController';

const router = Router();

router.get('/example', example);

export default router;