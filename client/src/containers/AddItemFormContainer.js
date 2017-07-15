import {connect} from 'react-redux'
import AddItemForm from '../components/AddItemForm'
import {postItem} from '../actions'

const mapDispatchToProps = (dispatch) => ({
	onAddItem: (item) => {
		dispatch(postItem(item))
	}
})

const AddItemFormContainer = connect(undefined, mapDispatchToProps)(AddItemForm)

export default AddItemFormContainer
