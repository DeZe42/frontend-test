export interface Filter {
  id: number;
  imgAlt: string
  imgSrc: string
  name: string
  selected: boolean
}

export interface Filters {
  name: string
  filterType: FilterType
  data: Filter[]
}

export type FilterType = 'languages' | 'authors' | 'statuses'
