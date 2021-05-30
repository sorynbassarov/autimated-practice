const Page = require('./page');

class MainPage extends Page {

    //!!! REVISE !!!
    get $checkCityModal () { return $('//*/div[@class="ReactModal__Content ReactModal__Content--after-open ModalNext VerifyCityModal"]')}

    get $checkCity () { return $('//*/p[@class="CitySelector__Title"]')}
   
    get $selectProduct () { return $('//div[contains(text(),"MYD92RU/A")]')}
    
    get $selectSearch () { return $('//div/input[@name="r46_search_query"]')}
    
    get $searchResults () { return $('//div[@class="rees46-search-results"]')}
    
    get $searchResultOption () { return $('//div[contains(text(),"MacBook Pro Retina M1")]')}
    
    open () {
        super.open('');
    }

    acceptCity(){
        $('//div/button/p[contains(text(),"Да")]').click();
    }

    selectPromo(){
        $('//div[@class="Header-Bonus"]').click();
    }

    selectAboutCompany(){
       $('//li/a[@href="/company"]').click();
    }

    selectGiftCards(){
        $('//li/a[@href="/certificates"]').click();
    }   

}

module.exports = new MainPage();
