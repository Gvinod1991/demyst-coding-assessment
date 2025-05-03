
import express from 'express';

const router = express.Router();

// Import individual route modules
import balanceSheetRoutes from './balanceSheet/routes';

// Use individual routes
router.use('/balance-sheet', balanceSheetRoutes);

export default router;