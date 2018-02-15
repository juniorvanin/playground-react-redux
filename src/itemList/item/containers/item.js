// @flow

import { connect } from 'react-redux'
import Item from '../components/item'
import type { State } from './../../../types/state'

const mapStateToProps = (state: State) => ({
  itemsAddedToCart: state.form.cart.itemsAdded,
})

const connector = connect(mapStateToProps)

export default connector(Item)
