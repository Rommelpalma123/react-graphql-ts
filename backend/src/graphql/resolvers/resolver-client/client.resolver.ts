import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Client } from '../../../models/index.models'
import { CreateClientInput } from '../Inputs/client/create.client.input'
import { ClientService } from '../../services/client.service'
import { UpdateClientInput } from '../Inputs/client/update.client.input'

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {
    this.clientService = new ClientService()
  }

  @Mutation(() => Client)
  async createClient(
    @Arg('createClient') createClientInput: CreateClientInput
  ) {
    return await this.clientService.createClient(createClientInput)
  }

  @Query(() => [Client], { name: 'allClient' })
  async allClient() {
    return await this.clientService.findAllClient()
  }

  @Query(() => Client, { name: 'findClientById' })
  async findClient(@Arg('id') id: string): Promise<Client | null> {
    return await this.clientService.findOneClient(id)
  }

  @Mutation(() => Client, { name: 'deleleClient' })
  async deleteClient(@Arg('id') id: string): Promise<Client | null> {
    return await this.clientService.deleteClient(id)
  }

  @Mutation(() => Client, { name: 'updateClient' })
  async updateClient(
    @Arg('id') id: string,
    @Arg('updateClienttInput') updateClientInput: UpdateClientInput
  ): Promise<Client | null> {
    return await this.clientService.updateClient(id, updateClientInput)
  }

  @Mutation(() => Client, { name: 'login' })
  async login(@Arg('email') email: string, @Arg('password') password: string) {
    const user = await this.clientService.login(email, password)

    if (!user) {
      throw Error('Email or Password is incorrect')
    }

    return user
  }
}
