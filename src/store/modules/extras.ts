import { IExtra } from './../../models/Extra'
import { Module } from 'vuex'

type State = {
	extras: IExtra[]
}

const extras: IExtra[] = [
	{
		id: '0',
		name: 'Жестяные банки (10 шт.)',
		price: {
			current: '7 990',
			old: '8 990',
		},
		imgSrc: '0.png',
		visImgSrc: 'vis-0.png',
		checked: true,
	},
	{
		id: '1',
		name: 'Защитные зажимы',
		price: {
			current: '7 990',
			old: '8 990',
		},
		imgSrc: '1.png',
		visImgSrc: 'vis-1.png',
		checked: false,
	},
	{
		id: '2',
		name: 'Насадка для самогоноварения',
		price: {
			current: '7 990',
			old: '8 990',
		},
		imgSrc: '2.png',
		visImgSrc: 'vis-2.png',
		checked: true,
	},
	{
		id: '3',
		name: 'Набор для копчения',
		price: {
			current: '7 990',
			old: '8 990',
		},
		imgSrc: '3.png',
		visImgSrc: 'vis-3.png',
		checked: false,
	},
]

const extrasModule: Module<any, any> = {
	state: {
		extras,
	},
	getters: {
		allExtras(state: State) {
			return state.extras
		},
	},
	mutations: {
		toggleChecked(state: State, id: string) {
			const index = state.extras.findIndex(extra => extra.id === id)
			state.extras[index].checked = !state.extras[index].checked
		},
	},
	actions: {
		toggleExtra({ commit }, id: string) {
			commit('toggleChecked', id)
		},
	},
}

export default extrasModule
