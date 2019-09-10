

This project is a test of ACME Supermarket made by FELIPE ICKERT.

## Goal

The goal of this test is an implementation of a simple market with rules described in `README.old.md`.
It consist of a javascript class implementation of a basket and also a UI interface using `React`

## How to run the project

First of all be sure you are using the latest version of node and run the following scripts:
### `npm install` 

Install all dependencies  

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You now will see a page with a list of products and a basket on the side with the total.
You can click and any product any amount of times and and the total will be showed on the basket.
You can also see the rules used to calculate the total value in the basked.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Several test were implemented to test the basket total calculator against a specific rule.
You can easly change the rule in the file `core/rulesToApply.js`
*Note if you want to create a new rule not existed you have to implement it in the file `core/rulesDefinition.js`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


