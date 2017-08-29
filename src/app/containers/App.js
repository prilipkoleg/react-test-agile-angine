import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import logo from "../media/logo.svg";

import addProduct from "../actions/productForm";
import {removeProduct, fetchProducts } from "../actions/productList";

class App extends Component {

  render() {
    const is_loading = this.props.is_loading;
    const fetchProducts = this.props.fetchProducts;
    const addProduct = this.props.addProduct;
    const removeProduct = this.props.removeProduct;
    const products = this.props.products;

    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="React" />
          </div>
        </div>

        <ProductForm handleAddProduct={addProduct}/>
        <div className="container"><hr/></div>
        <ProductList is_loading={is_loading} fetchProducts={fetchProducts} products={products} removeProduct={removeProduct} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.shopReducer.products,
    is_loading: state.shopReducer.is_loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct:
      (product) => dispatch(addProduct(product)),
    removeProduct:
      (id) => dispatch(removeProduct(id)),
    fetchProducts:
      () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
