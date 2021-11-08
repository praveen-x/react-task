import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import '../styles/Checkout.css';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
            className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="adimage"
        />
        {basket?.length===0 ? (
            <div>
            <h2>The basket is empty</h2>
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                    
                ))}
                
            </div>
        )}
            
        </div>
    );
}

export default Checkout;
