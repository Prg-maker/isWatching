import {VisualizationData, VisualizationRepository} from '../visualization-repository'
import {prisma} from '../../prisma'

export class PrismaVisualizationRepository implements VisualizationRepository{
  async create(){
    
    await prisma.visualization.aggregate({
      _count:{
        visualization: true
      }
    }) 
    

  }
}