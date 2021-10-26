import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
const Pay = () => {
    const [stripeToken,setStripeToken] =React.useState(null);
    const history=useHistory()
    const KEY="pk_test_51IeCGeC8AvDso05GV3C0XOjeZAk3g9TFOO04AtQzFsVmRBSLuJtVHDHDctf4nDNZgoUxQsofjFZeAOnKFEsfOMSy00dbCEIeZh";

    const onToken=(token) => {
        setStripeToken(token);
    }

    React.useEffect(() => {
        const makeRequest = async() => {
            try {
               const res= await axios.post('https://shopup-ecommerce.herokuapp.com/checkout/payment',
              {
                tokenId:stripeToken.id,
                amount:2000
              }
               );
               console.log(res.data);
               history.push("/success");
            }
            catch(err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest()
    },[stripeToken])
    return (
        <div 
        style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}
        >
        {
            stripeToken ? (
                <span>Processing. Please wait...</span>
            ):(
       <StripeCheckout 
        name="Shopup"
        image="https://i.ibb.co/0BBRQxL/Stylish-Girl-Hide-Face-FB-DP-2021-11.jpg"
        shippingAddress
        billingAddress
        description=" Youre Total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
        <button
        style={{
            border:"none",
            width:150,
            borderRadius:5,
            padding:"20px",
            backgroundColor:'black',
            color:'white',
            fontWeight:"600",
            cursor:"pointer"
        }}
        >
        PAY NOW
        </button>
        </StripeCheckout> 
        )}
        </div>
    );
};

export default Pay;