import {Map,List} from 'immutable'

let defaultState = Map({})

const reducers = (state = defaultState, action) => {
	switch(action.type)
	{
		case 'ADD_ITEM':
			return state
			break;
		case 'PUSH_ITEM':
			let items = state.get('items')
			items = items.push(action.item)
			return state.set('items',items)
			break;
		case 'UPDATE_ITEMS':
			return state.set('items',List(action.items))
			break;
		default:
			return state
	}
}

export default reducers
