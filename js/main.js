/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

const products = {
    /**
     * list of products
     */
    productslist: [
        {id: 1, title: 'Notebook', price: 2000},
        {id: 2, title: 'Mouse', price: 20},
        {id: 3, title: 'Keyboard', price: 35},
        {id: 4, title: 'Gamepad', price: 58},
        {id: 5, title: 'Chair', price: 200},
    ],
    /**
     * 
     * @param {string} productClass class of products block
     * sets prducts block innerHTML value from productslist
     */
    renderPage: function(productClass) {
        let productsBlocks = '';
        for (let index = 0; index < this.productslist.length; index++) {
            productsBlocks = productsBlocks.concat(`<div class="product-item">
                                       <h3>${this.productslist[index].title}</h3>
                                       <p>${this.productslist[index].price}</p>
                                       <button 
                                       data-id="${this.productslist[index].id}"
                                       data-price="${this.productslist[index].price}"
                                       data-title="${this.productslist[index].title}"
                                       >Купить</button>
                                   </div>`);
            console.log(productsBlocks);
        }
        document.querySelector(productClass).innerHTML = productsBlocks;
    },
};


products.renderPage('.products');