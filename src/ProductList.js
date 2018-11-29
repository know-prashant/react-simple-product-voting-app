import React, { Component } from 'react';
import Product from './Product';

const list = [
  {
    name: "Prashant yadav",
    desc: "This is product one",
    count: 20,
    id: 1
  },
  {
    name: "Taha Momin",
    desc: "This is product two",
    count: 30,
    id: 2
  },
  {
    name: "Anil Kapse",
    desc: "This is product three",
    count: 10,
    id: 3
  },
  {
    name: "Naimish Dave",
    desc: "This is product four",
    count: 40,
    id: 4
  }
]


class ProductList extends Component{
  constructor(){
    super();
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    this.setState({
      products: list
    });
  }

  updateCount(id){
    const updateProducts = this.state.products.map((p) => {
      if(p.id === id){
        return Object.assign({}, p, {count: p.count + 1})
      }else{
        return p;
      }
    });

    this.setState({
      products: updateProducts
    })
  }

  render() {
    this.state.products.sort((a,b) => b.count - a.count);

    return (
      <div className="product-list">
          {this.state.products.map((l) => <Product key={l.id} list={l} updateCount={this.updateCount}/>)}
      </div>
    );
  }
}

export default ProductList;
