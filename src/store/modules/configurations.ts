import { IConfiguration } from './../../models/Configuration'
import { Module } from 'vuex'

type State = {
	configurations: IConfiguration[]
	selected_configuration: IConfiguration
}

const configurations: IConfiguration[] = [
	{
		id: '15',
		name: '15 литров без ТЭНа',
		price: {
			current: '6 990',
			old: '7 990',
		},
		imgSrc: '15.png',
		visImgSrc: 'vis-15.png',
	},
	{
		id: '15t',
		name: '15 литров с ТЭНом',
		price: {
			current: '7 990',
			old: '8 990',
		},
		imgSrc: '15t.png',
		visImgSrc: 'vis-15t.png',
	},
	{
		id: '20',
		name: '20 литров без ТЭНа',
		price: {
			current: '8 990',
			old: '9 990',
		},
		imgSrc: '20.png',
		visImgSrc: 'vis-20.png',
	},
	{
		id: '20t',
		name: '20 литров с ТЭНом',
		price: {
			current: '9 990',
			old: '10 990',
		},
		imgSrc: '20t.png',
		visImgSrc: 'vis-20t.png',
	},
	{
		id: '26',
		name: '26 литров без ТЭНа',
		price: {
			current: '10 990',
			old: '11 990',
		},
		imgSrc: '26.png',
		visImgSrc: 'vis-26.png',
	},
	{
		id: '26t',
		name: '26 литров с ТЭНом',
		price: {
			current: '11 990',
			old: '12 990',
		},
		imgSrc: '26t.png',
		visImgSrc: 'vis-26t.png',
	},
	{
		id: '34',
		name: '34 литра без ТЭНа',
		price: {
			current: '12 990',
			old: '13 990',
		},
		imgSrc: '34.png',
		visImgSrc: 'vis-34.png',
	},
	{
		id: '34t',
		name: '34 литра с ТЭНом',
		price: {
			current: '13 990',
			old: '14 990',
		},
		imgSrc: '34t.png',
		visImgSrc: 'vis-34t.png',
	},
]

const selected_configuration: IConfiguration =
	configurations[configurations.length - 1]

const configurationsModule: Module<any, any> = {
	state: {
		configurations,
		selected_configuration,
	},
	getters: {
		allConfigurations(state: State) {
			return state.configurations
		},
		selectedConfiguration(state: State) {
			return state.selected_configuration
		},
		configurationPrice(state: State) {
			return Number(state.selected_configuration.price.current.replace(' ', ''))
		},
	},
	mutations: {
		setSelectedConfiguration(state: State, id) {
			const index = state.configurations.findIndex(
				configuration => configuration.id === id
			)
			state.selected_configuration = state.configurations[index]
		},
		selectDefaultConfiguration(state: State) {
			state.selected_configuration =
				state.configurations[state.configurations.length - 1]
		},
	},
	actions: {
		selectConfiguration({ commit }, id) {
			commit('setSelectedConfiguration', id)
		},
	},
}

export default configurationsModule
