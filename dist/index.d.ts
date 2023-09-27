import { NextFunction, Request, Response } from 'express';
declare const ExpressPath: (pathsFolder: string) => (req: Request, res: Response, next: NextFunction) => any;
export default ExpressPath;
