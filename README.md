Install dependencies:
```cmd
npm i
```
then build project and run server:
```cmd
npm run server:build:run
```
and go:
```
//localhost:3000
```

## Test task for React.JS

The goal of this task is to develop web application with a simple user interface utilizing
React.JS that can create product and save it.

1. Make page with form​ for adding new product (without using npm modules with data layer such as 'redux-form')
    - “name”​ with validation: 4-8 characters, only numbers and letters allowed.
    - “color”​ checkbox (red, green, blue)
1. Make simple datagrid​ to show existing products.

It will be plus:

1. Use ES6/7
1. Saving data on backend using node.js + express.js or koa.js
1. Using 'redux-observable' for ajax

You can use any UI library like 'react-toolbox' or 'react-bootstrap'.<br>
From the code prospective, program should be architected in the way that would make its
components reusable in any other applications easily.
