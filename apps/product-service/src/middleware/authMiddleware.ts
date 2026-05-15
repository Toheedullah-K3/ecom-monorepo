// express clerk user authentication middleware
import { Request, Response, NextFunction } from "express"
import { getAuth } from '@clerk/express'

declare global {
    namespace Express {
        interface Request {
            userId?: string
        }
    }
}

export const shouldBeUser = async (req: Request, res: Response, next: NextFunction) => {
    const auth = getAuth(req)
    const userId = auth.userId

    if (!auth.isAuthenticated) {
        return res.status(401).send('User not authenticated')
    }
    req.userId = userId ?? undefined

    console.log("Authenticated user:", auth)
    next()
}