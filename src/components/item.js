import React, { Component } from 'react';
class Item extends Component{
  selectProduct(name) {
    this.props.selectProduct(name);
  }

  showProduct(product) {
    if(product.status) {
      return (
        <div className="card float-left m-1" style={{width: '18rem'}}>
          <img className="card-img-top" src={product.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary" onClick={() => this.selectProduct(product.name)}>Add to Carts</button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.showProduct(this.props.product)}
      </div>
    )
  }
}

export default Item;