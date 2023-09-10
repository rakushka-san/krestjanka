interface IPrice {
	current: string
	old: string
}

export interface IExtra {
	id: string
	name: string
	price: IPrice
	imgSrc: string
	visImgSrc: string
	checked: boolean
}
