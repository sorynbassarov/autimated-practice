const Page = require('./page');

class CheckoutPage extends Page {
    
    get $checkFirstNameInput (){ return $('//*/input[@id="PersonalInfoStep-firstName"]')}

    get $checkLastNameInput (){ return $('//*/input[@id="PersonalInfoStep-lastName"]')}
   
    get $checkEmailInput (){ return $('//*/input[@id="PersonalInfoStep-email"]')}
   
    get $checkPhoneInput (){ return $('//*/input[@id="PersonalInfoStep-phone"]')}
   
    get $checkNextStepButton (){ return $('//button/p[contains(text(),"Следующий шаг")]')}
    
    get $checkTotalSum (){ return $('//div/p[@class="Typography__Subtitle"]')}

    //!!! REVISE !!!
    get $checkTitle(){ return $('//div/p[@class="CartItemNext__Title Typography__Body Typography__Body_Small Typography__Body_Bold"]')}

    //!!! REVISE !!!
    get $checkQuantity(){ return $('//div/p[@class="CartItemNext__Quantity Typography__Body Typography__Body_Small Typography__Body_Bold"]')}

    get $checkPersonalInfo(){ return $('//*/div[@class="PersonalInfoStep CheckoutStepsMarcher__PersonalInfoStep"]')}

    get $checkRequiredField(){ return $('//*/p[contains(text(),"Обязательное поле")]')}
}

module.exports = new CheckoutPage();