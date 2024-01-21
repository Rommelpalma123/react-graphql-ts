import { User, userModel } from '../../models/index.models'
import { CreateUserInput } from '../resolvers/Inputs/CreateUserInput'
import { UpdateUserInput } from '../resolvers/Inputs/UpdateUserInput'

export class UserService {
  async createUser(createUserInput: CreateUserInput) {
    const { email } = createUserInput

    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      throw new Error('This email already exists')
    }

    const newUser = userModel.create(createUserInput)
    return (await newUser).save()
  }

  async findAllUsers(): Promise<User[]> {
    return await userModel.find()
  }

  async findBiIdUser(id: string): Promise<User | null> {
    const user = userModel.findById(id)
    if (!user) {
      throw new Error('User not fount')
    }
    return user
  }

  async deleteUserBiId(id: string): Promise<User | null> {
    const user = userModel.findByIdAndDelete(id)
    if (!user) {
      throw new Error('User not fount to delete')
    }
    return user
  }

  async updateUserBiId(
    id: string,
    updateUserInput: UpdateUserInput
  ): Promise<User | null> {
    const updateUser = await userModel.findByIdAndUpdate(id, updateUserInput, {
      new: true
    })
    if (!updateUser) {
      throw new Error('User not found to update')
    }
    await updateUser.save()
    return updateUser
  }
}
