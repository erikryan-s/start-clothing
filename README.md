# START. Clothing Webstore

An e-commerce website built using React and Firestore. Featuring a design based on the [END Clothing](https://www.endclothing.com/au) webstore.

🔗 [Live Demo](https://erikryan-s.github.io/start-clothing/) (**TO BE DEPLOYED**)

## Table of Contents

-   [Screenshots](#screenshots)
-   [Start-up Instructions](#start-up-instructions)
-   [Goal](#goal)
-   [Project Requirements](#project-requirements)
-   [Lifecycle and Implementation Details](#lifecycle-and-implementation-details)
-   [Design Inspiration](#design-inspiration)
-   [Future Updates and Current Limitations](#future-updates-and-current-limitations)

## Screenshots

<p align="center">
    <h3>Home Page</h3>
    <img src="https://user-images.githubusercontent.com/100544923/163005073-076fdded-923d-4ba7-92da-805b66d38aa0.gif" height="400" width=auto>
    <h3>All Products</h3>
    <img src="https://i.gyazo.com/80d597fd328b9095d3539a81c36c5c92.png" height="400" width=auto>
    <h3>Product Page</h3>
    <img src="https://i.gyazo.com/398e953e49cbe4ba8124ad01b5da8c52.jpg" height="400" width=auto>
</p>

## Start-up Instructions

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Goal

1. Create a e-commerce store based on [requirements](#project-requirements)
2. Learn to work with React and different libraries
    - React components
    - Functional react with hooks
    - Managing data flow with Props and State
    - Deployment
3. Learn to work with FireStore
    - Persisting data to an API

## Project Requirements

### Create a React E-commerce Application

#### 2 pages:

-   Home Page
-   Grid of products
-   Product Page
-   Carousel of featured products
-   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants

#### All products should be stored in Firestore, you should store the following information:

-   quantity
-   variants (could be colors, sizes, etc)
-   price per unit
-   name
-   image url
-   favourited or not (boolean)

#### All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

**Bonus:**

-   Using Firestore and react create, a cart system.
-   Create a cart page in your react app
-   Add logic to prevent users from adding items to cart that are no longer in stock.
-   You will have to check the current cart and the product quantity

**Cart page should have the following:**

-   List of products in cart
-   ability to change quantity of products in cart
-   ability to remove items from cart
-   Make sure you site is scope to one category of products

## Lifecycle and Implementation Details

### Tech Used

-   React
-   Material-UI
-   Styled Components
-   JavaScript
-   FireStore
-   Fetch
-   Async / Await
-   Git & Github

### Breakdown of Logic

-   design UI using styled components and material UI
-   create home page, products grid, carousel and product page (with id parameter)
-   set up routing between pages using react-router DOM
-   store data in FireStore and fetch it in the front-end using fetch and async / await
-   upload final version to GitHub

## Design Inspiration

### END Clothing Webstore

<p align="center">
    <img src="https://i.gyazo.com/cc4fd7cf857f9e557e414e501be1fbfd.jpg" height="400" width=auto>
</p>

## Future Updates and Current Limitations

-   upload data to FireStore and fetch it
-   implement cart system
