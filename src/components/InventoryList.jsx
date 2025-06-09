import { useState, useEffect } from 'react';
import InventoryItem from './InventoryItem';
const API = {
    bakery: './models/bakery.json',
    produce: './models/produce.json',
    meat: './models/meat.json',
};
const DEFAULT_CATEGORY = 'bakery';

function InventoryList() {
    const [inventory, setInventory] = useState(null);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(DEFAULT_CATEGORY);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // use the proper grocery API
                const groceryAPI = API[category];
                // fetch the data
                const response = await fetch(groceryAPI);
                const json = await response.json();
                // set the response as the inventory to render
                setInventory(json);
            } catch (error) {
                setError(error);
            }
        };

        if (error) {
            // console log error if applicable
            console.log(error);
        }

        // call the function
        fetchData();

        // update when the category state changes
    }, [category]);

    function handleClick(e) {
        e.preventDefault();

        // get the id of the category clicked to use for choosing an API
        const target = e && e.target;
        const id = target && target.id;

        // set the category state with the category clicked
        setCategory(id);
    }

    return (
        <>
            <div id="categories">
                <a id="bakery" href="#" onClick={handleClick}>Bakery</a>
                <a id="produce" href="#" onClick={handleClick}>Produce</a>
                <a id="meat" href="#" onClick={handleClick}>Meat</a>
            </div>
            <h2>{category.toUpperCase()} INVENTORY</h2>
            <div id='inventoryTiles'>
                {inventory && inventory.map(item => (<InventoryItem key={item.key} item={item}/>)) }
            </div>
        </>
    )
}

export default InventoryList;