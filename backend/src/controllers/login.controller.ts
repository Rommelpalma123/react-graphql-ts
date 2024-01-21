import { Request, Response } from "express";
import { LoginService } from "../services/login.service";


export const loginController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const token = await LoginService.loginUser(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
}
