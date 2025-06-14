import { Link } from 'react-router-dom';

function InventoryItem(props) {
    let item = props && props.item,
        name = item && item.name,
        sku = item && item.sku,
        price = item && item.price,
        unit = item && item.unit,
        quantity = item && item.quantity;

  return (
    <>
        <Link to={`/product/${sku}`} state={item}>
          <div className='tile'>
              <span className='name'>{name}</span>
              <span className='sku'>SKU: {sku}</span>
              <span className='price'>${price}/{unit}</span>
              <span className='quantity'>{quantity} Remaining</span>
          </div>
        </Link>
    </>
  )
}

export default InventoryItem;