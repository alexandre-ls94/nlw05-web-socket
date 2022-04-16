import { Request, Response, Router } from 'express'
import settingsController from './controllers/settings-controller'

const routes = Router()

routes.post('/settings', settingsController.create)
routes.get('/settings', settingsController.get)
routes.get('/settings/:id', settingsController.getById)
routes.delete('/settings/:id', settingsController.delete)
routes.put('/settings/:id', settingsController.update)

export { routes }
