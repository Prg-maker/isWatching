import {Router} from 'express'
import {PrismaVisualizationRepository} from './repository/prisma/prisma-visualization-repository'
import {VisualizationUseCase} from './use-cases/visualization-use-case'

const router = Router()

router.get('/', async (req, res)=> {

  const prismaVisualizationRepository = new PrismaVisualizationRepository()
  const visualizationUseCase = new VisualizationUseCase(prismaVisualizationRepository)

  try{
    const {visualization} =  await  visualizationUseCase.execute()
    return res.status(201).json({
      visualization: visualization
    })
  }catch(err){
    return res.status(400).send()
  }

})


export {
  router
}