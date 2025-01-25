import express, { Request, Response, Router } from 'express';
import { connectDB } from './conndb';

export const router = Router();

// Get all transactions
router.get('/', async (req: Request, res: Response) => {
    try {
        const transactions = await (await connectDB()).all('SELECT * FROM Transactions');
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});


