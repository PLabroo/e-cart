import React from 'react';

const CartItem = (props)=>{
    // setState() is used for re-rendering the react component
    // React does batching(setState() renders comp only once)
    // setState() are async operations,to make extra calls use callback as another argument
    // batching doesnt happen in promises or ajax calls.Sync operations take place there

    
    // increaseQuantity = () => {
    //     // one way of writing setState()

    //     this.setState({
    //         title:'Hii'
    //     })

    //     // 2nd way of writing setState()
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }   
    //     })
    // }

    // decreaseQuantity = () => {
    //     // 2nd way of writing setState()
    //     this.setState((prevState) => {
    //         let curval = prevState.qty > 0 ? prevState.qty - 1 : 0;
    //         return {
    //             qty: curval
    //         }   
    //     })
    // }

    // deleteItem = () => {
        
    // }
    // batching = () => {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('Hello');
    //         },4000)
    //     })

    //     promise.then(() => {
    //         this.setState({
    //            qty:100
    //         })
    //     })
        const { price, title, qty } = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity,onDeleteCartItem } = props;
        //console.log(this.props);
        return (
            <div className='cart-item'>
                <div className="left-block">
                    <img style={styles.image} src={product.img} alt="" />
                </div>
                <div className="right-block">
                    <div style={{color:'#777'}}>{title}</div>
                    <div style={{color:'#777'}}>Rs.{price}</div>
                    <div>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className='action-icons' onClick={()=>onIncreaseQuantity(product)}/>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" alt="decrease" className='action-icons' onClick={()=>onDecreaseQuantity(product)}/>
                        <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="delete" className='action-icons' onClick={()=>onDeleteCartItem(product.id)}/>
                    </div>
                </div>
            </div>
        )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}

export default CartItem;