# CS 601 Week 5 Assignment - React

Please take a look around. Run `npm install` to add the node_modules, then run `npx vite` to start the server. You should see the project run in your browser on http://localhost:5173/ (double-check the port number in your terminal).

## About My Project

I created an inventory management list for an imaginary grocery store,  Fast & Fresh. When you load the page, you'll see their logo at the top, rendered by the `header` component. Below that, you will see the main component of the page, the `InventoryList`. `InventoryList` fetches inventory data from a json file, and iterates through it to render tiles using the `InventoryItem` component. `InventoryItem` handles dividing each data tile into smaller pieces - the item name, which is rendered in bold, the product sku, which is italicized and smaller since it's likely less important to the average user, the price per unit, and the amount remaining in stock. 

The `InventoryList` module has three buttons - one for each type of grocery. When you click a button, we get the id of the grocery category selected, which then informs which json file will be fetched and rendered. The default category is bakery. 

At the bottom is a simple footer, rendered by the `footer` component.

(The logo was created in Canva, which I have a subscription for)

