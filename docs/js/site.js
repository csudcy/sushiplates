'use strict';

const SETTINGS = {
  currency_symbol: '&pound;',
  items: [
    {
      name: 'Green',
      color: '#bfcd46',
      price: 2.1
    }, {
      name: 'Blue',
      color: '#29a9e5',
      price: 2.8
    }, {
      name: 'Purple',
      color: '#5a368d',
      price: 3.7
    }, {
      name: 'Orange',
      color: '#e66222',
      price: 4.2
    }, {
      name: 'Pink',
      color: '#d92087',
      price: 4.6
    }, {
      name: 'Grey',
      color: '#a0b4b9',
      price: 5.2
    }, {
      name: 'Yellow',
      color: '#fdd93c',
      price: 6.0
    }, {
      name: 'Diet Coke',
      color: '#eeeeee',
      price: 2.6
    }
  ]
};

/***********************\
*  Init functions
\***********************/

function main() {
  console.log('Hello, Sushi Platers!');
  render();
}

/***********************\
*  Utility functions
\***********************/

function format_money(money) {
  return SETTINGS.currency_symbol + money.toFixed(2);
}

/***********************\
*  Render functions
\***********************/

function render() {
  render_items();
  render_total();
}

function render_items() {
  let html = '';
  SETTINGS.items.forEach(function(item_info) {
    html += `
      <span class="item_row" data-color="${item_info.color}" style="border-color: ${item_info.color};">
        <button data-value="-1" style="background-color: ${item_info.color};">-</button>
        <span class="item">
          ${item_info.name}: <span class="count">0</span> x ${format_money(item_info.price)}
        </span>
        <button data-value="+1" style="background-color: ${item_info.color};">+</button>
      </span>`
  });
  document.querySelector('#items').innerHTML = html;
}

function render_total() {
}

/***********************\
*  Boot
\***********************/

window.onload = main;
