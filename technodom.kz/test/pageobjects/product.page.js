const Page = require('./page');

class ProductPage extends Page {

    get $checkAddToCartModal (){ return $('//*/div[@class="AddToCartPopup-CartInfo"]')}

    get $checkH1 () { return $('//*/h1[@class="ProductHeader-Title"]')}

    get $checkBreadCrumps () { return $('//*/ul[@class="Breadcrumbs-List"]')}

    get $checkAddToCartButton () { return $('//*/span[contains(text(),"Добавить в корзину")]')}

    get $checkProductCreditCalculatorButton () { return $('//*/div[@class="ProductCreditCalculator-MonthList"]')}

    get $checkProductDetails () { return $('//*/article[@class="ProductDetails"]')}

    get $checkProductExtraInfo () { return $('//*/div[@class="ProductExtraInfo"]')}

    get $checkActiveButton () { return $('//*/button[@class="ProductTabs-Button ProductTabs-Button_isActive"]')}
    
    addToCart(){
        $('//*/button[@class="AddToCart-Button Button Button_big"]').click();
    }

    goToCart(){
        $('//*/button[@class="AddToCartPopup-Button AddToCartPopup-Button_big"]').click();
    }

}

module.exports = new ProductPage();
