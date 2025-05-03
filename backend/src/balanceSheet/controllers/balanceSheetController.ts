import { Request, Response } from "express";

export const example = async (req: Request, res: Response) => {
  try {
    console.log(process.env.PORT);
    res.status(200).json({ status: true, message: "Hello world!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred on the server" });
  }
};
