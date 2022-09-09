export type BrandType = {
  name: string,
  image?: string
}

export type BrandListType = {
  loading: boolean,
  selectedBrand: number,
  errors: Array<string>,
  items: Array<BrandType>
}


export type BrandMenuItem = {
  label: string,
  icon?:string,
  url?: string,
  children?: Array<BrandMenuItem>
}

export type BrandMenuType = {
  loading: boolean,
  errors: Array<string>,
  items: Array<BrandMenuItem>,
}