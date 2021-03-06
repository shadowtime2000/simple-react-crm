import React, { Component } from 'react'
import Item from './Item.js';

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.customers.map((customer, index) => (
          <Item
            key={index}
            id={customer.id}
            name={customer.name}
            tag={customer.tag}
            delCustomer={this.props.delCustomer}
          />
        ))}
      </div>
    )
  }
}

export default List;