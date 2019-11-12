## Setup:

Download the files and open `index.html` in a browser.

## Notes:

I tried using vanilla Javascript for the entire app, instead of using frameworks or libraries like React. This way I can focus on quickly building up the proof of concept and satisfy the requirement of using vanilla JS. As such, I stored the product info and assigned it to a variable, which mimics a real app after data has been fetched from a database. I also didn't use any ES6 and as such don't have access to find() or filter() methods, therefore I created my own findProduct() function, for example.

I implemented my solution to use localStorage, storing the product ID as the key and a count of how many of that product is being stored--similar to a shopping cart. I used the product ID, instead of storing the entire product object data, keeping in mind scalability but also the fact that product data might change over time (price, reviews, etc).

For example, if this was a shopping cart, we would fetch the stored products from the database based on its product ID in order to get current and up to date info. At this point I would ask or investigate the backend, as I assume it's written in a way that takes care of the N+1 problem--as in, I wouldn't have to make one query for every unique product in my stored products, and that the products endpoint would be able to serve up all my data in one go. I would then refactor my code in displayStorage() to properly fetch that way.

Next steps would be to refactor code, get it working with a server, implement the additional features, and write unit tests.

Tested in Chrome.


## Directions:

    - Display a fully responsive grid of products from the attached json file (image, name, price)

    - User clicks product to store the product in local storage

    - Stored products are persistent and rendered (from local storage) in another section (either same page or different page)

    - User can click stored products to remove them from local storage

    - We'll be testing persistence by closing the browser and reloading the page

    - As much as possible, stick to vanilla JavaScript for DOM manipulation (queries, events, etc.)
