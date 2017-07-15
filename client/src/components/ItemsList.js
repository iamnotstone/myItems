import React from 'react'

const ItemsList = ({contentList}) => (
	<div>
		<ul>
		{
			contentList.map((item, index) => 
				<li key = {index}> {item} </li>
			)
		
		}
		</ul>
	</div>
)

export default ItemsList
