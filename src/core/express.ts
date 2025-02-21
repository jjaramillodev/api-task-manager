import { managerRouter } from '@routes/manager.router'
import cors from 'cors'
import Express, { json } from 'express'

export const express = Express()

express.disable('x-powered-by')
express.use(json())
express.use(cors())

express.use(managerRouter)
