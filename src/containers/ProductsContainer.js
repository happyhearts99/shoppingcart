import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getAllproducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList >
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} 
         />
    )}
  </ProductsList>
)

const mapStateToProps = state => ({
  products: getAllproducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
