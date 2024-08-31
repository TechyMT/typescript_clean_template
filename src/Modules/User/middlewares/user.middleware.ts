import { Request, Response, NextFunction } from 'express';

export function userLogger(req: Request, res: Response, next: NextFunction): void {
  console.log(`User Request - ${req.method} ${req.path}`);
  next();
}
