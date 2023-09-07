import {useEffect} from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
function Product(props){
    useEffect(function(){
        console.log("component loaded");
    },[]);
    return(
        <div className="product">
            <img src={"/images/"+props.data.image} alt="product" />


            <label>{props.data.price}$</label>
            {/* <label>Total</label> */}
            <h5>{props.data.title}</h5>
            <QuantityPicker/>
        </div>
    );
}

export default Product;