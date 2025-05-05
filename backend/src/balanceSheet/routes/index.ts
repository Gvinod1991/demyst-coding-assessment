
import { Router } from 'express';
import {
  example,
  getBalanceSheet
} from '../controllers/balanceSheetController';

const router = Router();

router.get('/example', example);
router.get('/', getBalanceSheet);

export default router;