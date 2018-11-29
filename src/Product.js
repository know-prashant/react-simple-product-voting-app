import React, { Component } from 'react';
import './Product.css';

class Product extends Component{
  constructor(props){
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote = () =>{
    this.props.updateCount(this.props.list.id);
  }

  render(){
    return(
      <div className="product" key={this.props.list.id}>
        <span>{this.props.list.name}</span>
        <p>{this.props.list.desc}</p>
        <span>{this.props.list.count}</span>
        <a onClick = {() => this.handleUpVote()}> upvote </a>
      </div>
    )
  }

}

export default Product;
