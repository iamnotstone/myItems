import React from 'react'

const AddItemForm = ({onAddItem}) => {
	let input
	return (
	<div>
		<form onSubmit = { e => {
			e.preventDefault()
			if(!input.value.trim()){
				return
			}
			onAddItem(input.value)
		}}
		>
			<input type = 'text' ref={
				node => {
					input = node
				}
			}/>
			<input type = 'submit' value='Add'></input>
		</form>
	</div>
	)
}

export default AddItemForm
