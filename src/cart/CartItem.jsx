import React from 'react'
import { useGlobalContext } from '../context/context'


const CartItem = ({ id, img, title, price, amount }) => {
  
  const {remove, increase, decrease } = useGlobalContext();

  return (
   <section >
          <ul className="products">
            <li className="row">
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={img} alt="plant" />
                  </a>
                </div>
                <div className="detail">
                  <div className="name"><a href="#">{title}

                  </a></div>
                  <div className="description"> </div>
                  <div className="price">${price} </div>
                   <button onClick={()=> remove(id)}> remove</button>
                </div>
              </div>
      
              <div className="col right">
                <div className="quantity">
                    <div className="wrapper">
                      {/* <button  }>-</button> */}
                        <span className="minus" onClick={() => decrease(id)}>-</span>
                        <span className="num">{amount}</span>
                        <span className="plus"   onClick={()=> increase(id)}>+</span>
                        {/* <button }>+</button> */}
                      </div>

                      {/* <div className="remove">
                        remove

                      </div> */}
                </div>
                
              
              </div>
            </li>
          </ul>
   </section>
  )
}

export default CartItem
