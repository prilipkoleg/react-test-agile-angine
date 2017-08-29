'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 *  Default data (or can use some DB)
 */
const
  products = {
    1: {id: 1, name: "HTC server", color: "#f00"},
    2: {id: 2, name: "Apple server", color: "#0f0"},
    3: {id: 3, name: "Asus server", color: "#00f"},
  };
let id = 3;


app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/build'));

/**
 *  Simple api routes
 */

app.get('/api/products', function (req, res) {
  setHeader(res);
  res.send(Object.keys(products).length ? JSON.stringify(products) : '{}');
});

app.post('/api/product/add', function (req, res) {
  setHeader(res);
  let resMess = {
    status: false
  };
  if (req.body['product'] !== undefined){
    let newProduct = {id: ++id};
    Object.assign(newProduct, req.body.product);
    products[id] = newProduct;
    resMess.status = true;
  }else{
    resMess.error = 'Need new "product" data.';
  }
  res.send(JSON.stringify(resMess));
});

app.get('/api/product/remove/:id', function (req, res) {
  setHeader(res);
  let resMess = {
    status: false
  };
  if (req.params.id === undefined || products[req.params.id] === undefined){
    resMess['error'] = 'Wrong index or Product List is empty!'
  }else{
    delete products[req.params.id];
    resMess.status = true
  }
  res.send(JSON.stringify(resMess));
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

function setHeader(res) {
  return res.setHeader('Content-Type', 'application/json');
}