import { Module } from 'vuex'

type State = {
	error: string
}

const errorsModule: Module<any, any> = {
	state: {
		error: '',
	},
	getters: {
		error(state: State) {
			return state.error
		},
	},
	mutations: {
		error(state: State, error: string) {
			state.error = error
		},
		emptyError(state: State) {
			state.error = ''
		},
	},
	actions: {},
}

export default errorsModule
