export interface Filter {
  id: number;
  imgAlt: string
  imgSrc: string
  name: string
  selected: boolean
}

export interface Filters {
  name: string
  type: 'languages' | 'authors' | 'statuses'
  data: Filter[]
}
