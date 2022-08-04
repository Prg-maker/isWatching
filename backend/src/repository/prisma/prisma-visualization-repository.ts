import {VisualizationRepository , VisualizationData} from '../visualization-repository'
import {prisma} from '../../prisma'

interface Return {
  visualization: number
}

export class PrismaVisualizationRepository implements VisualizationRepository{
  async create(){

    const {visualization} = await prisma.visualization.findFirst() as Return

    const valor = visualization  +1

    const visualizationData =  await prisma.visualization.update({
      where:{
        id:"3299872c-8a7d-4871-a56b-2ef67d7f62ee"
      },
      data:{
        visualization: valor
      }
    }) as Return

    return visualizationData
  }
}