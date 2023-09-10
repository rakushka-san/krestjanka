import { IPrice } from './Price'

export interface IConfiguration {
	id: string
	name: string
	price: IPrice
	imgSrc: string
	visImgSrc: string
}
