import { Request, Response } from 'express'
import settingsService from '../services/settings-services'

class SettingsController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body
      const result = await settingsService.create(data)

      return res.json(result)
    } catch (err) {
      return console.log(err)
    }
  }

  async get(req: Request, res: Response) {
    try {
      const result = await settingsService.get()
      return res.json(result)
    } catch (err) {
      return console.log(err)
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const result = await settingsService.getById(req.params.id)
      return res.json(result)
    } catch (err) {
      return console.log(err)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const result = await settingsService.delete(req.params.id)
      return res.json(result)
    } catch (err) {
      return console.log(err)
    }
  }

  async update(req: Request, res: Response) {
    try {
      const result = await settingsService.update(req.params.id, req.body)
      return res.json(result)
    } catch (err) {
      return console.log(err)
    }
  }
}

export default new SettingsController()