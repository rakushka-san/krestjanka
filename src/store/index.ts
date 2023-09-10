import { createStore } from 'vuex'
import extrasModule from './modules/extras'
import configurationsModule from './modules/configurations'
import errorsModule from './modules/errors'

type State = {
	name: string
	phone: string
	showModal: boolean
}

export default createStore({
	state: {
		name: '',
		phone: '',
		showModal: false,
	},
	getters: {
		name(state: State) {
			return state.name
		},
		phone(state: State) {
			return state.phone
		},
		showModal(state: State) {
			return state.showModal
		},
	},
	mutations: {
		updateName(state: State, name) {
			state.name = name
		},
		updatePhone(state: State, phone) {
			state.phone = phone
		},
		showModal(state: State) {
			state.showModal = true
		},
		hideModal(state: State) {
			state.showModal = false
		},
	},
	actions: {},
	modules: {
		extrasModule,
		configurationsModule,
		errorsModule,
	},
})
