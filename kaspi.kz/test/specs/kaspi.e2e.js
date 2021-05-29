const MainPage = require('../pageobjects/main.page');
const ShopPage = require('../pageobjects/shop.page');
const GadgetsPage = require('../pageobjects/gadgets.page');
const { addFeature, addTestId, addStep, addStory } = require('@wdio/allure-reporter').default;





describe('kaspi.kz', () => {
    it('Главная страница "kaspi.kz" должна быть открыта', () => {
        addFeature("Тестируем Каспи");
        addStory("Проверка возможностей фреймворков");

        addStep('Открываем главную страницу kaspi.kz');
        
        MainPage.open();
        addStep('Подтвердаем выбор региона');
        MainPage.acceptSelectRegion();

        addStep('Текущий город Алматы');
        expect(MainPage.$currentCity).toHaveTextContaining('Алматы');

    });

    it('Страница "Магазин" должна открыться', () => {
        addStep('Открываем старницу "Магазин"');

        MainPage.$shopLink.click();

        addStep('Подтверждаем выбор города');
        ShopPage.acceptSelectCity('Алматы');
    });

    it('Страница "Телефоны и гаджеты" должны открыться', () => {
        addStep('Переходим на страницу "Телефоны и гаджеты');

        ShopPage.$gadgetLink.click();
    });

    it('Должны быть выбраны телефоны бренда "Samsung"', () => {
        addStep('Выбираем бренд "Samsung"');
        GadgetsPage.$samsungLink.click();
        addStep('Ожидаем 2 секунды');
        browser.pause(2000);
    });

    it('Должен быть выбран телефон модели "Samsung Galaxy A21s 3/32Gb черный"', () => {
        addStep('Выбираем модель "Samsung Galaxy A21s 3/32Gb черный"');

        GadgetsPage.$modelLink.click();

    });

    it('Должен быть выбран продавец', () => {

        addStep('Выбираем продавца');

        GadgetsPage.$sellerLink.click();
        addStep('Ожидаем 5 секунд');

        browser.pause(5000);
    });
});
