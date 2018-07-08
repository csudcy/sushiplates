'use strict';

const SETTINGS = {
  currency_symbol: '&pound;',
  items: [
    {
      name: 'Green',
      color: '#bfcd46',
      price: 2.3
    }, {
      name: 'Blue',
      color: '#29a9e5',
      price: 2.9
    }, {
      name: 'Purple',
      color: '#5a368d',
      price: 3.8
    }, {
      name: 'Orange',
      color: '#e66222',
      price: 4.3
    }, {
      name: 'Pink',
      color: '#d92087',
      price: 4.8
    }, {
      name: 'Grey',
      color: '#a0b4b9',
      price: 5.4
    }, {
      name: 'Yellow',
      color: '#fdd93c',
      price: 6.3
    }, {
      name: 'Diet Coke',
      color: '#eeeeee',
      price: 2.65
    }
  ]
};

/***********************\
*  Init functions
\***********************/

function main() {
  render_items();
  bind_handlers();
  update_total();
}

function render_items() {
  let html = '';
  SETTINGS.items.forEach(function(item_info) {
    html += `
      <span class="item_row" style="border-color: ${item_info.color};">
        <button data-step="-1" style="background-color: ${item_info.color};">-</button>
        <span class="item">
          <span class="item_inner">
            ${item_info.name}: <span class="count" data-price="${item_info.price}">0</span> x ${format_money(item_info.price)}
          </span>
        </span>
        <button data-step="+1" style="background-color: ${item_info.color};">+</button>
      </span>`
  });
  document.querySelector('#items').innerHTML += html;
}

function bind_handlers() {
  document.querySelectorAll('button').forEach(function(button) {
    button.onclick = button_click;
  });
}

/***********************\
*  Utility functions
\***********************/

function format_money(money) {
  return SETTINGS.currency_symbol + money.toFixed(2);
}

/***********************\
*  Interaction functions
\***********************/

function button_click(event) {
  let target = event.target;
  let count_element = target.parentElement.querySelector('.count');

  let current_count = parseInt(count_element.innerHTML);
  let step = parseInt(target.dataset.step);
  let new_value = Math.max(0, current_count + step);
  count_element.innerHTML = new_value;

  update_total();
}

function update_total() {
  let total_count = 0;
  let total_money = 0.0;
  document.querySelectorAll('#items .count').forEach(function(count_element) {
    let count = parseInt(count_element.innerHTML);
    let money = parseFloat(count_element.dataset.price);

    total_count += count;
    total_money += count * money;
  });

  document.querySelector('.total_count').innerHTML = total_count;
  document.querySelector('.total_money').innerHTML = format_money(total_money);
}

/***********************\
*  Boot
\***********************/

window.onload = main;
