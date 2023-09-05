import './product.css';
import QuantityPicker from './quantityPicker';
function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/210/200" alt="product" />

            <label>Price</label>
            <label>Total</label>
            <h5>Product title</h5>
            <QuantityPicker/>
        </div>
    );
}

export default Product;