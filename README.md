# CS 601 Week 6 Assignment - React Router

Please take a look around. Run `npm install` to add the node_modules, then run `npx vite` to start the server. You should see the project run in your browser on http://localhost:5173/ (double-check the port number in your terminal).

## About My Project

This week's project was a continuation from last week's project. I started with the inventory project I made last week, that had three categories of inventory tiles rendered from json data. This week, I made each tile clickable, using react-router-dom to link to a dynamically created url based on the SKU of the item. This new page renders a ProductDetail component, which features the item name, a description, an image, as well as the tile data created last week: SKU, quantity, and price. The header and footer continue to render on each dynamically-created page, and there is a button to return to the homepage as well. 