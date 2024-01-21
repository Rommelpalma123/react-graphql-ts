import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Register } from '../../../models/index.models'
import { CreateRegisterInput } from '../Inputs/register/create.register.input'
import { RegisterService } from '../../services/register.service'
import { UpdateRegisterInput } from '../Inputs/register/update.register.input'

@Resolver(() => Register)
export class RegisterResolver {
  constructor(private readonly registerService: RegisterService) {
    this.registerService = new RegisterService()
  }

  @Mutation(() => Register)
  async createRegister(
    @Arg('createRegister') createRegisterInput: CreateRegisterInput
  ) {
    return await this.registerService.createRegister(createRegisterInput)
  }

  @Query(() => [Register], { name: 'allRegister' })
  async allRegister() {
    return await this.registerService.findAllRegister()
  }

  @Query(() => Register, { name: 'findRegisterById' })
  async findRegister(@Arg('id') id: string): Promise<Register | null> {
    return await this.registerService.findOneRegister(id)
  }

  @Mutation(() => Register, { name: 'deleleRegister' })
  async deleteRegister(@Arg('id') id: string): Promise<Register | null> {
    return await this.registerService.deleteRegister(id)
  }

  @Mutation(() => Register, { name: 'updateRegister' })
  async updateRegister(
    @Arg('id') id: string,
    @Arg('updateRegisterInput') updateRegisterInput: UpdateRegisterInput
  ): Promise<Register | null> {
    return await this.registerService.updateRegister(id, updateRegisterInput)
  }
}
