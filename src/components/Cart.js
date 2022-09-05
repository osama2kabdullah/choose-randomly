import React from 'react';

const Cart = (props) => {
    console.log(props.data);
    return (
        <div className='cart'>
            <h2 style={{textAlign: 'center'}}>Selected Books</h2>
            {
                props.data.map(item=><div key={item.id}><h3>{item.name}</h3></div>)
            }
            <button>Pick Randomly</button><br /><br />
            <button onClick={props.btn}>Clear All</button>
        </div>
    );
};

export default Cart;