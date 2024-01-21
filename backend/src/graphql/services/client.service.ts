import { Client, ClientModel } from '../../models/client.models'
import { generateToken } from '../../utils/generateToken'
import { CreateClientInput } from '../resolvers/Inputs/client/create.client.input'
import { UpdateClientInput } from '../resolvers/Inputs/client/update.client.input'
import * as bcrypt from 'bcrypt'
export class ClientService {
  async createClient(createClientInput: CreateClientInput) {
    const newClient = ClientModel.create(createClientInput)
    return (await newClient).save()
  }

  async findAllClient(): Promise<Client[] | null> {
    return await ClientModel.find().populate('id_pais')
  }

  async findOneClient(id: string): Promise<Client | null> {
    const client = ClientModel.findById(id)
    if (!client) {
      throw new Error('Client not found')
    }
    return client
  }

  async deleteClient(id: string): Promise<Client | null> {
    const client = await ClientModel.findByIdAndDelete(id)
    if (!client) {
      throw new Error('Client not found to delete')
    }
    return client
  }
  async updateClient(
    id: string,
    updateClientInput: UpdateClientInput
  ): Promise<Client | null> {
    const updateClient = await ClientModel.findByIdAndUpdate(
      id,
      updateClientInput,
      { new: true }
    )
    if (!updateClient) {
      throw new Error('Client not found to update')
    }
    await updateClient.save()
    return updateClient
  }

  async login(
    email: string,
    password: string
  ): Promise<{ client: Client; token: string } | null> {
    const client = await ClientModel.findOne({ email })

    if (client && (await bcrypt.compare(password, client.password))) {
      const token = generateToken(client.id)
      return { client, token }
    }

    return { client: new Client(), token: 'null' }
  }
}
