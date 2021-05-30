const Page = require('./page');

class GiftcardPage extends Page {

    get $checkButton() { return $('div:nth-of-type(2) > a > button') }

    get $checkButtonLink() { return $('//div[@class="corp_img"]/a') }

}

module.exports = new GiftcardPage();