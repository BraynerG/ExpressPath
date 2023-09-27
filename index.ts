import { NextFunction, Request, Response } from 'express'

const ExpressPath = (pathsFolder: string) => (req: Request, res: Response, next: NextFunction) => {
    try {

        const source = require(pathsFolder + req.path)
        if (source) return source(req, res, next)

        res.sendStatus(404)

    } catch (error) {
        res.sendStatus(404)
    }

}

export default ExpressPath