const MainPage = require('../pageobjects/main.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const { addFeature, addStory, addTestId, addStep } = require('@wdio/allure-reporter').default

const url = "https://www.technodom.kz/p/noutbuk-apple-macbook-pro-retina-m1-8gb-512ssd-230872";
const productTitle = "Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 512SSD / 13.3 / Mac OS Big Sur / (MYD92RU/A)";
const productPrice = "835 990";

///   Добавление товара в корзину

describe('Добавление товара в корзину', () => {

    it('Открыть страницу продукта', () => {

        addFeature("Тестирование technodom.kz");
        addStory("Техническое задание по сайту Технодома");
        addTestId("001");

        addStep('Открываем страницу Ноутбук Apple MacBook Pro Retina M1');
        browser.url(url);
        browser.pause(5000);

        MainPage.acceptCity();
        browser.pause(5000);

        addStep('Title страницы содержит “Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 512SSD / 13.3 / Mac OS Big Sur / (MYD92RU/A)”');
        expect(browser).toHaveTitleContaining(productTitle);

    });

    it('Добавить продукт в корзину', () => {

        addTestId("002");
        
        addStep('Нажимаем на кнопку “Добавить В  корзину”');
        ProductPage.addToCart();
        browser.pause(10000);

        addStep('Отображается модальное окно “Вы добавили новый товар в корзину”');
        expect(ProductPage.$checkAddToCartModal).toExist();
        browser.pause(3000);

    });

    it('Перейти в корзину', () => {

        addTestId("003");
        addStep('Нажимаем на кнопку “Перейти в корзину”');
        ProductPage.goToCart();

        addStep('Открывается страница /cart');
        expect(browser).toHaveUrlContaining('/cart');

        addStep('Title страница содержит “Корзина”');
        expect(browser).toHaveTitleContaining('Корзина');

        addStep('Отображается выбранный товар');
        expect(CartPage.$checkOrderItem).toExist();

        addStep('Отображается сумма товара, которая была на странице товара');
        expect(CartPage.$checkOrderPrice).toHaveTextContaining(productPrice);

        addStep('Отображается кнопка “Оформить заказ”');
        expect(CartPage.$checkOrderConfirmationButton).toExist();

    });

    it('Оформить заказ', () => {

        addTestId("004");
        addStep('Нажимаем на кнопку “Оформить заказ”');
        CartPage.confirmOrder();

        addStep('Открывается страница /checkout/personal-info');
        expect(browser).toHaveUrlContaining('/checkout/personal-info');

        // Открывается форма “оформление заказа”, которая содержит поля:
        addStep('Форма “оформление заказа” содержит поле - Имя');
        expect(CheckoutPage.$checkFirstNameInput).toExist();

        addStep('Форма “оформление заказа” содержит поле - Фамилия ');
        expect(CheckoutPage.$checkLastNameInput).toExist();

        addStep('Форма “оформление заказа” содержит поле - email');
        expect(CheckoutPage.$checkEmailInput).toExist();

        addStep('Форма “оформление заказа” содержит поле - Мобильный телефон');
        expect(CheckoutPage.$checkPhoneInput).toExist();

        addStep('Отображается кнопка “Следующий шаг”');
        expect(CheckoutPage.$checkNextStepButton).toExist();

        addStep('На форме отображается та же сумма. что и в карточке товара ');
        expect(CheckoutPage.$checkTotalSum).toHaveTextContaining(productPrice);

        addStep('Отображается наименование выбранного товара и количество 1');
        expect(CheckoutPage.$checkTitle).toHaveTextContaining('Ноутбук Apple MacBook Pro 13\" Retina M1 512 Space Gray 2020 (MYD92RU/A)');
        expect(CheckoutPage.$checkQuantity).toHaveTextContaining('1');

    });

    it('Проверить оформление заказа', () => {

        addTestId("004");
        addStep('Нажимаем на кнопку “Следующий шаг”');
        CheckoutPage.$checkNextStepButton.click();

        addStep('Остается активным шаг “1. Личные данные”');
        expect(CheckoutPage.$checkPersonalInfo).toExist();

        addStep('Возле полей появляются сообщения об ошибке: “Обязательное поле”');
        expect(CheckoutPage.$checkRequiredField).toExist();

    });
});