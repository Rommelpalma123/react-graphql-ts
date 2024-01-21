import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Procedure } from '../../../models/index.models'
import { CreateProcedureInput } from '../Inputs/procedure/create.procedure.input'
import { ProcedureService } from '../../services/procedure.service'
import { UpdateProcedureInput } from '../Inputs/procedure/update.procedure.input'

@Resolver(() => Procedure)
export class ProcedureResolver {
  constructor(private readonly procedureService: ProcedureService) {
    this.procedureService = new ProcedureService()
  }

  @Mutation(() => Procedure)
  async createProcedure(
    @Arg('createProcedure') createProcedureInput: CreateProcedureInput
  ) {
    return await this.procedureService.createProcedure(createProcedureInput)
  }

  @Query(() => [Procedure], { name: 'allProcedure' })
  async allProcedure() {
    return await this.procedureService.findAllProcedure()
  }

  @Query(() => Procedure, { name: 'findProcedureById' })
  async findProcedure(@Arg('id') id: string): Promise<Procedure | null> {
    return await this.procedureService.findOneProcedure(id)
  }

  @Mutation(() => Procedure, { name: 'deleleProcedure' })
  async deleteProcedure(@Arg('id') id: string): Promise<Procedure | null> {
    return await this.procedureService.deleteProcedure(id)
  }

  @Mutation(() => Procedure, { name: 'updateProcedure' })
  async updateProcedure(
    @Arg('id') id: string,
    @Arg('updateProcedureInput') updateProcedureInput: UpdateProcedureInput
  ): Promise<Procedure | null> {
    return await this.procedureService.updateProcedure(id, updateProcedureInput)
  }
}
