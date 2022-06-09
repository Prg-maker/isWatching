export interface VisualizationData{
  visualization: number
}

export interface VisualizationRepository{
  create:()=> Promise<VisualizationData>
}

