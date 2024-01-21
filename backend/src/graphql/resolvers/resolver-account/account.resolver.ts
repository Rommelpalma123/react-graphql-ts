import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Account } from '../../../models/index.models'
import { CreateAccountInput } from '../Inputs/account/create.account.input'
import { AccountService } from '../../services/account.service'
import { UpdateAccountInput } from '../Inputs/account/update.account.input'

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {
    this.accountService = new AccountService()
  }

  @Mutation(() => Account)
  async createAccount(
    @Arg('createAccount') createAccountInput: CreateAccountInput
  ) {
    return await this.accountService.createAccount(createAccountInput)
  }

  @Query(() => [Account], { name: 'allAccounts' })
  async allAccounts() {
    return await this.accountService.findAllAccount()
  }

  @Query(() => Account, { name: 'findAccountById' })
  async findAccount(@Arg('id') id: string): Promise<Account | null> {
    return await this.accountService.findOneAccount(id)
  }

  @Mutation(() => Account, { name: 'deleleAccount' })
  async deleteAccount(@Arg('id') id: string): Promise<Account | null> {
    return await this.accountService.deleteAccount(id)
  }

  @Mutation(() => Account, { name: 'updateAccount' })
  async updateAccount(
    @Arg('id') id: string,
    @Arg('updateAccountInput') updateAccountInput: UpdateAccountInput
  ): Promise<Account | null> {
    return await this.accountService.updateAccount(id, updateAccountInput)
  }
}
