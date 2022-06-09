import {VisualizationData, VisualizationRepository} from '../visualization-repository'
import {prisma} from '../../prisma'


export class PrismaVisualizationRepository implements VisualizationRepository{
  async create(){
    
    const visualization = await prisma.visualization.findFirst()

    

  }
}