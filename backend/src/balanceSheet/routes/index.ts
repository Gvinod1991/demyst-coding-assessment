
import { Router } from 'express';
import {
  example,
  getBalanceSheet
} from '../controllers/balanceSheetController';

const router = Router();

router.get('/example', example);
router.get('/fetch', getBalanceSheet);

export default router;