import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component{
  constructor() {
      super();
      this.state = {
          products: [
              {
                  title: 'Phone',
                  price: '999',
                  qty: 2,
                  img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                  id:100
              },
              {
                  title: 'Watch',
                  price: '999',
                  qty: 3,
                  img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
                  id:101
              },
              {
                  title: 'Shirt',
                  price: '1111',
                  qty: 21,
                  img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
                  id:102
              }
          ]
      }
    }

    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products: products
            // we can write as just products when key value is same
        })
    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        // products[index].qty -= 1;
        products[index].qty = products[index].qty <=0? 0 : products[index].qty - 1;

        this.setState({
            products
        })
    }

    deleteCartItem = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products:items
        })
    }
  
  getCartCount = () => {
      const { products } = this.state;
      let count = 0;
      products.forEach((product) => {
        count += product.qty;
      })
      return count;
  }
  
  getTotalPrice = () => {
    const { products } = this.state;
    let cost = 0;

    products.map((product) => {
      cost = cost + product.qty * product.price;
    })
    return cost;
  }
  render() {
    const { products } = this.state;
    return (
      <div className='App'>
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteCartItem={this.deleteCartItem}
          
        />
        <div>
          <h4 style={{ textAlign:'center' }}>Total:{this.getTotalPrice()}</h4>
        </div>
      </div>
    )
  }
  
}

export default App;
