import React from 'react';


class CartItem extends React.Component{
    render() {
        return (
            <div className='cart-item'>
                <div className="left-block">
                    <img style={ styles.image} src="" alt="" />
                </div>
                <div className="right-block">
                    <div style={{color:'#777'}}>Phone</div>
                    <div style={{color:'#777'}}>Rs.999</div>
                    <div>Qty: 1</div>

                    <div className="cart-item-actions">
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className='action-icons' />
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" alt="decrease" className='action-icons' />
                        <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="delete" className='action-icons' />
                    </div>
                </div>
            </div>
        )
    }
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