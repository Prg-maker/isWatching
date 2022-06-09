export interface VisualizationData{
  visualization: number
}

export interface VisualizationRepository{
  create:()=> Promise<void>
}

