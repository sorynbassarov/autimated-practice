const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GadgetsPage extends Page {
    /**
     * define selectors using getter methods
     */
  
    get $samsungLink(){ return $('//li/a[contains(text(),"Samsung Galaxy")]') }
    
    get $modelLink(){ return $('//*/a[contains(text(),"A21s 3/32Gb черный")]') }
    
    get $sellerLink(){ return $('div[class=sellers-table__buy-cell]') }
    
  
     /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        super.open('shop/c/smartphones%20and%20gadgets/');
    }

}

module.exports = new GadgetsPage();