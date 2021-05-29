const Page = require('./page');
const cities = require('../helper/cities').cities;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {


    get $gadgetLink(){ return $('li[data-category="Smartphones and gadgets"]') }




 
    open () {
    
        super.open('shop');
    }

    acceptSelectCity(city){
        const el =  $(`div[data-dialog-id="modal-current-location"] a[data-city-id='${cities[city]}']`);
       el.click();
       
       
    }


    }


module.exports = new ShopPage();