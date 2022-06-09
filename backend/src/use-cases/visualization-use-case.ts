import {PrismaVisualizationRepository} from '../repository/prisma/prisma-visualization-repository'

export class VisualizationUseCase{
  constructor(
    private prismaVisualizationRepository: PrismaVisualizationRepository
  ){}

  async execute(){
    await this.prismaVisualizationRepository.create()
    
  }
}