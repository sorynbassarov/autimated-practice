const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get $currentCity () { return $('#headerRegionId') }

    get $shopLink () {
        return $('a[data-ddl-label="Shop"]')
    }
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        //return super.open('');
        super.open('');
    }

    acceptSelectRegion(){
        $('#headerRegionConfirm__ConfirmButton').click();
    }


    }


module.exports = new MainPage();