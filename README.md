TECH STACK

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

1.1 Overview
-Image gallery
--Images

-Product Information
--Data about products, including pricing, possible sales, availability, etc.
---star rating (reviews rounded to x.25)
---product category
---product title
---price (updates according to current style of item selected) (every item will have a default style)
---product overview
---share on social media buttons

-Style Selector
--allows user to select the style of the product that they want
---styles will be represented as a thumbnail
---no limit to number of styles a product has, should be displayed in rows of 4

-Add To Cart
--allows users to add a product to their cart
---size selector dropdown (should only display sizes currently in stock) (if no sizes are available the dropdown should become inactive and read "OUT OF STOCK") (when collapsed, the dropdown should show the currently selected size) (by default the dropdown should display "select size")
---quantity selector dropdown (integer will be however much the item has in stock but will be <=15) (if size has not yet been selected, this dropdown will say "-" and be disabled) (once a size is selected, the dropdown should display "1")
---add to cart (if size has not been selected, this button will display a dropdown stating “Please select size”.) (if there is no stock, the button should be hidden) (if both a size and quantity are selected, the button will add items to the users cart)

Ratings and Reviews: 
Overall Component
![1675971627578](https://user-images.githubusercontent.com/34527037/221379097-399096ef-0103-441a-834b-9e84e5bccf1b.jpeg)

Adding Reviews Component
![1675971627624](https://user-images.githubusercontent.com/34527037/221379099-67f00f2c-8ee1-4b77-b0d2-a1571dc4111f.jpeg)

1.3 Q & A

Does changes here get pulled to main or fork?

USAGE
--------------------------------------------------------------------------------------------------------



## Install and setup 🧶 Yarn.
To manage our dependencies we will be using a package manager called 🧶 Yarn. You can learn more about it [here](https://yarnpkg.com/).

### Yarn Installation
```bash
npm i -g yarn
```
To begin (after installing yarn); Type ( yarn install ) into the terminal and hit enter; This will install all the dependenices.

Afterwards to begin devlopment run (yarn start) then run (yarn dev) to see in the output in local host 300.

### Jest Installation
run "npx jest --init"
typescript: no
choose test environment: jsdom
coverage reports: yes
provider: babel
auto clear mock calls: no


