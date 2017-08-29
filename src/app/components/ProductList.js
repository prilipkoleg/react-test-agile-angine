import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class ProductListItem extends Component{
  render(){
    const
      item = this.props.item,
      removeProduct = this.props.remove;

    return (
      <ListGroupItem key={item.id} className="clearfix">
        <strong>Name:</strong> {item.name} <strong>Color</strong>: <span className="color-circle" style={{backgroundColor: item.color}}></span>
        <span className="remove-item pull-right">
          <Button bsStyle="danger"
                  bsSize="xsmall"
                  onClick={()=>removeProduct(item.id)}>Remove</Button>
        </span>
      </ListGroupItem>)
  }
}

class ProductList extends Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

  render() {
    const products = Object.keys(this.props.products).map( (id) => this.props.products[id] );

    return (
      <div className="ProductList">
        <div className="ProductList-header">
          <div className="container">
            <h2>Product List</h2>
          </div>
        </div>
        <div className="ProductList-content">
          <div className="container">
            <div className="additional-info">
              {products.length ?
                <p className="additional-info__count">
                  <i>Total products:</i> <strong>{products.length}</strong>
                </p>
                : ''}
            </div>
            {/*this.props.is_loading ? `<h1>Loading.....</h1>` : ""*/}
            <div className="product-list">
              {products.length
                ?
                /*<ListGroup>{ products.map( (item, index) => listItem(item, this.props.removeProduct) ) }</ListGroup>*/
                <ListGroup>{ products.map( (item, index) => <ProductListItem item={item} remove={this.props.removeProduct} />)}</ListGroup>
                :
                <p>No products!</p>
              }
            </div>
          </div>
        </div>
      </div>
    );// return
  }// render
}

/*ProductList.PropTypes = {
  products: PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired
  })
};*/

export default ProductList;
