import { useState, createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
export const ShopContext = createContext();
const ShopContextProvider = (props) =>{
    const currency = 'Rs';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch , setShowSearch ] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const navigate = useNavigate();

    const addtoCart = async (itemId,size) =>{
        let cartData = structuredClone(cartItem);

        if (!size) {
            toast.error('Select Product size')
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for (const item in cartItem){
            for( const items in cartItem[item] ){
                try {
                 if(cartItem[item][items]>0)   {
                    totalCount+=cartItem[item][items];
                 }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItem){
            let itemInfo = products.find((product)=>product._id===items);
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                }
                catch(error){
                    
                }
            }
        }
        return totalAmount;
    }

    const updateQuantity = async (itemId, size, quantity) =>{
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);

    }

    

    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch,
        cartItem, addtoCart, getCartCount, updateQuantity, getCartAmount,
        navigate

    }

    return(
        <ShopContext.Provider value ={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;