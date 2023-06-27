import React, { useContext } from 'react'
import { productContext } from '../ProductContext/ProductContext'
import './Cart.css'
import { Button } from '@chakra-ui/react';
const Cart = () => {
  const { updateState, state } = useContext(productContext);
  return (
    <div className='AddtocartOuterDiv'>

      <div className='lowerDiv'>
        {
          state.cart.length === 0 ? <div><h1 style={{color:'red'}}>Cart is Empty</h1></div> :
            <div className='wrapperDiv'>
              {state.cart.map((ele) => {
                return <div className='AddtocartItems'>
                  <div className='imageDiv'>
                    <img src={ele.image} alt="" />
                  </div>
                  <div className='detailDiv'>
                    <h2 style={{ color: "green" }}>{ele.category}</h2>
                    <h1 style={{ color: "black" }}>{ele.title}</h1>
                    <span>-: Product Description :-</span>
                    <p>{ele.description}</p>
                  </div>
                  <div className='priceDiv'>
                    <span>
                      <h2>Price : </h2>
                      <h2 style={{ color: "red" }}>${ele.price}</h2>
                    </span>
                    {/* <button >remove</button> */}

                    <Button variant='solid' colorScheme='orange' onClick={() => { updateState("remove", ele.id) }}>
                      remove
                    </Button>
                  </div>
                </div>
              })}
            </div>
        }
      </div>
    </div>
  )
}

export default Cart