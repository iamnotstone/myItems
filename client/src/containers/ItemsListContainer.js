import {connect} from 'react-redux'
import ItemsList from '../components/ItemsList'

const mapStateToProps = (state) => ({
	contentList: state.get('items')
})

const ItemsListContainer = connect(mapStateToProps)(ItemsList)

export default ItemsListContainer
