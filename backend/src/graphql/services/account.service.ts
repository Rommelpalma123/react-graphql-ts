import { Account, AccounttaModel } from '../../models/account.models'
import { CreateAccountInput } from '../resolvers/Inputs/account/create.account.input'
import { UpdateAccountInput } from '../resolvers/Inputs/account/update.account.input'

export class AccountService {
  async createAccount(createAccountInput: CreateAccountInput) {
    const newAccount = AccounttaModel.create(createAccountInput)
    return (await newAccount).save()
  }

  async findAllAccount(): Promise<Account[] | null> {
    return await AccounttaModel.find()
  }

  async findOneAccount(id: string): Promise<Account | null> {
    const account = AccounttaModel.findById(id)
    if (!account) {
      throw new Error('account not found')
    }
    return account
  }

  async deleteAccount(id: string): Promise<Account | null> {
    const account = await AccounttaModel.findByIdAndDelete(id)
    if (!account) {
      throw new Error('account not found to delete')
    }
    return account
  }

  async updateAccount(
    id: string,
    updateAccountInput: UpdateAccountInput
  ): Promise<Account | null> {
    const updateAccount = await AccounttaModel.findByIdAndUpdate(
      id,
      updateAccountInput,
      { new: true }
    )
    if (!updateAccount) {
      throw new Error('account not found to update')
    }
    await updateAccount.save()
    return updateAccount
  }
}
