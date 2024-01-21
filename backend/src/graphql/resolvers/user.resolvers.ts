import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { User } from '../../models/index.models'
import { CreateUserInput } from './Inputs/CreateUserInput'
import { UserService } from '../services/user.service'
import { UpdateUserInput } from './Inputs/UpdateUserInput'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {
    this.userService = new UserService()
  }

  @Mutation(() => User)
  async createUser(@Arg('createUser') createUserInput: CreateUserInput) {
    return await this.userService.createUser(createUserInput)
  }

  @Query(() => [User], { name: 'allUser' })
  async allUser() {
    return await this.userService.findAllUsers()
  }

  @Query(() => User, { name: 'findUserBiId' })
  async findUserBiId(@Arg('id') id: string): Promise<User | null> {
    return await this.userService.findBiIdUser(id)
  }

  @Mutation(() => User, { name: 'deleleUser' })
  async deleteUser(@Arg('id') id: string): Promise<User | null> {
    return await this.userService.deleteUserBiId(id)
  }

  @Mutation(() => User, { name: 'updateUser' })
  async updateUser(
    @Arg('id') id: string,
    @Arg('updateUserInput') updateUserInput: UpdateUserInput
  ): Promise<User | null> {
    return await this.userService.updateUserBiId(id, updateUserInput)
  }
}
