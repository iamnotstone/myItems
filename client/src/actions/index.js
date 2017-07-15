import fetch from 'isomorphic-fetch'

export const addItem = (item) => ({
	type: 'ADD_ITEM',
	item
})

export function postItem(item){
	return function (dispatch){
		return fetch('/addItem',{
			method:'POST',
			body:JSON.stringify({value : item}),
			headers:{
				'Content-Type':'application/json'
			}
		})
		.then(
			response => response.json(),
			err => console.log('Unknown error',err)
		)
		.then(
			text => {
				dispatch(pushItem(text.value))
			},
			err => console.log('Wrong data',err)
		)
	}

}

export function getItems(){
	return function (dispatch){
		return fetch('/getItems',
			{
				method:'GET'
			}
		)
		.then(
			response => {
				return response.json()
			},
			error => {
				console.log("unknown error",error)
			}
		)
		.then(
			json =>{
				dispatch(updateItems(json))
			},
			error => {
				console.log('empty content',error)
			}
		)
	}
}

export const pushItem = (item) => ({
	type: 'PUSH_ITEM',
	item
})

export const updateItems = (items) => ({
	type: 'UPDATE_ITEMS',
	items
})
