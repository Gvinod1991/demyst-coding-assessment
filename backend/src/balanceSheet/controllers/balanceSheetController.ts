import { Request, Response } from "express";
import { fetchXeroBalanceSheet } from "../services/balanceSheetService";

export const example = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: true, message: "Hello world!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred on the server" });
  }
};

export const getBalanceSheet = async (req: Request, res: Response) => {
  try {
    const data = await fetchXeroBalanceSheet(req.query);
    res.status(200).json(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "An error occurred on the server" });
  }
};

