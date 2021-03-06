import React from 'react'
import Header from './../header/components/header'
import ShoppingCart from './../shoppingCart/components/shoppingCart'

import './../layout.css'

const hideShoppingCart = ({ displayShoppingCart, toggleShoppingCart }) => () => {
  if (displayShoppingCart) toggleShoppingCart()
}

const Layout = props => (
  <React.Fragment>
    <section className="pageWrapper" onClick={hideShoppingCart(props)} onKeyDown={hideShoppingCart(props)} role="button" tabIndex="0">
      <div className={props.displayShoppingCart ? 'overlay' : null} />
      <Header />
      <section className="mainContent">
        { props.children }
      </section>
    </section>
    <ShoppingCart items={props.items} displayShoppingCart={props.displayShoppingCart} />
  </React.Fragment>
)

export default Layout
