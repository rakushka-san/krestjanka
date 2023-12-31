import { IPrice } from './Price'

export interface IExtra {
	id: string
	name: string
	price: IPrice
	imgSrc: string
	visImgSrc: string
	checked: boolean
}
