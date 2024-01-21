import { Procedure, ProcedureModel } from '../../models/procedure.models'
import { CreateProcedureInput } from '../resolvers/Inputs/procedure/create.procedure.input'
import { UpdateProcedureInput } from '../resolvers/Inputs/procedure/update.procedure.input'

export class ProcedureService {
  async createProcedure(createProceduretInput: CreateProcedureInput) {
    const newPrecedure = ProcedureModel.create(createProceduretInput)
    return (await newPrecedure).save()
  }

  async findAllProcedure(): Promise<Procedure[] | null> {
    return await ProcedureModel.find()
  }

  async findOneProcedure(id: string): Promise<Procedure | null> {
    const procedure = ProcedureModel.findById(id)
    if (!procedure) {
      throw new Error('procedure not found')
    }
    return procedure
  }

  async deleteProcedure(id: string): Promise<Procedure | null> {
    const procedure = await ProcedureModel.findByIdAndDelete(id)
    if (!procedure) {
      throw new Error('procedure not found to delete')
    }
    return procedure
  }

  async updateProcedure(
    id: string,
    updateAccountInput: UpdateProcedureInput
  ): Promise<Procedure | null> {
    const updateProcedure = await ProcedureModel.findByIdAndUpdate(
      id,
      updateAccountInput,
      { new: true }
    )
    if (!updateProcedure) {
      throw new Error('procedure not found to update')
    }
    await updateProcedure.save()
    return updateProcedure
  }
}
