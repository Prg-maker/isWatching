import {PrismaVisualizationRepository} from '../repository/prisma/prisma-visualization-repository'

export class VisualizationUseCase{
  constructor(
    private prismaVisualizationRepository: PrismaVisualizationRepository
  ){}

  async execute(){
    const visualization = await this.prismaVisualizationRepository.create()
    return visualization
  }
}