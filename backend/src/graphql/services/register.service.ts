import { Register, RegisterModel } from '../../models/register.models'
import { CreateRegisterInput } from '../resolvers/Inputs/register/create.register.input'
import { UpdateRegisterInput } from '../resolvers/Inputs/register/update.register.input'

export class RegisterService {
  async createRegister(createRegisterInput: CreateRegisterInput) {
    const newRegister = RegisterModel.create(createRegisterInput)
    return (await newRegister).save()
  }

  async findAllRegister(): Promise<Register[] | null> {
    return await RegisterModel.find()
  }

  async findOneRegister(id: string): Promise<Register | null> {
    const register = RegisterModel.findById(id)
    if (!register) {
      throw new Error('register not found')
    }
    return register
  }

  async deleteRegister(id: string): Promise<Register | null> {
    const register = await RegisterModel.findByIdAndDelete(id)
    if (!register) {
      throw new Error('register not found to delete')
    }
    return register
  }

  async updateRegister(
    id: string,
    updateClientInput: UpdateRegisterInput
  ): Promise<Register | null> {
    const updateRegister = await RegisterModel.findByIdAndUpdate(
      id,
      updateClientInput,
      { new: true }
    )
    if (!updateRegister) {
      throw new Error('register not found to update')
    }
    await updateRegister.save()
    return updateRegister
  }
}
