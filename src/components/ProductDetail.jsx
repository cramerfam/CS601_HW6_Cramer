import { useLocation } from 'react-router-dom';
import '../inventoryList.css';

function ProductDetail() {
    let location = useLocation(),
        state = location && location.state,
        name = state && state.name,
        sku = state && state.sku,
        price = state && state.price,
        unit = state && state.unit,
        quantity = state && state.quantity,
        image = state && state.image,
        description = state && state.description;

    return (
        <>
            <div id="productContainer">
                <h2 id="productName">{name}</h2>
                <span id="productDescription">{description}</span>
                <img id="productImage" src={image}/>
                <span id="productSku">SKU: {sku}</span>
                <span id="productPriceDetails">${price}/{unit} | {quantity} Remaining</span>
                <a id="productHome" href="/">Back to homepage</a>
            </div>
        </>
    )
}

export default ProductDetail;