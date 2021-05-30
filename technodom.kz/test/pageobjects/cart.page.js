const Page = require('./page');

class CartPage extends Page {

    get $checkOrderItem (){ return $('//*/div[@class="CartItem-Info"]')}

    //!!! REVISE !!!
    get $checkOrderPrice (){ return $('//*/strong[@class="CartSummary-Price CartSummary-Price_align_right CartSummary-Price_bold"]')}
   
    get $checkOrderConfirmationButton (){ return $('//*/div[@class="CartPage-StickyButton"]')}

    confirmOrder(){
        $('//*/button[contains(text(),"Оформить заказ")]').click();
  }

}

module.exports = new CartPage();
