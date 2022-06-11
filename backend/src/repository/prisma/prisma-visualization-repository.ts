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
        id:"00ec84bf-cdc6-4c14-904f-48b71aec7b29"
      },
      data:{
        visualization: valor
      }
    }) as Return
    console.log(visualizationData)

    return visualizationData
  }
}