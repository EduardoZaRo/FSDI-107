import Product from "../components/product";
import "./catalog.css";

function Catalog(){
    return(
        <div className="catalog">
            <h1>Check out our products</h1>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export default Catalog;