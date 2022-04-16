import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories/settings-repo'

class SettingsService {  
  async create(data: any) {
    const settingsRepo = getCustomRepository(SettingsRepository)

    const setting = settingsRepo.create({
      chat: data.chat,
      username: data.username
    })

    const result = await settingsRepo.save(setting)

    return result
  }

  async get() {
    const settingsRepo = getCustomRepository(SettingsRepository)

    const result = await settingsRepo.find()
    return result
  }

  async getById(id: string) {
    const settingsRepo = getCustomRepository(SettingsRepository)

    const result = await settingsRepo.findOne(id)
    return result
  }

  async delete(id: string) {
    const settingsRepo = getCustomRepository(SettingsRepository)

    await settingsRepo.delete(id)
    return {message: 'Setting deletado com sucesso'}
  }

  async update(id: string, data: any) {
    const settingsRepo = getCustomRepository(SettingsRepository)

    await settingsRepo.update(id, data)
    const result = await settingsRepo.findOne(id)

    return result
  }
}

export default new SettingsService()