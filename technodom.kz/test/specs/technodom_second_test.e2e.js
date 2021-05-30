const MainPage = require('../pageobjects/main.page');
const ProductPage = require('../pageobjects/product.page');
const { addFeature, addStory, addTestId, addStep } = require('@wdio/allure-reporter').default

const productTitle="Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 512SSD / 13.3 / Mac OS Big Sur / (MYD92RU/A)";

describe('Поиск товара и карточка товара', () => {

    it('Открыть сайт technodom.kz', () => {

        addFeature("Тестирование technodom.kz");
        addStory("Техническое задание по сайту Технодома");
        addTestId("001");

        addStep('Открываем главную страницу technodom.kz');
        MainPage.open();

        addStep('Title страницы содержит “TECHNODOM Интернет-магазин бытовой техники и электроники в  | www.technodom.kz”');
        expect(browser).toHaveTitleContaining('TECHNODOM Интернет-магазин бытовой техники и электроники в', ' | www.technodom.kz');

        addStep('Отображается модальное окно подтверждения города');
        expect(MainPage.$checkCityModal).toExist();

    });

    it('Подтверждаем выбор города', () => {

        addTestId("002");

        addStep('Подтверждаем выбор города - нажимаем кнопку ДА');
        MainPage.acceptCity();

        addStep('Модальное окно закрывается.');
        expect(MainPage.$checkCityModal).not.toExist();

        addStep('В левом верхнем углу отображается выбранный город.');
        expect(MainPage.$checkCity).toHaveTextContaining("Алматы");
        browser.pause(2000);

    });

    it('Ввести название продукта', () => {

        addTestId("003");

        addStep('В поле поиска набираем текст “MacBook Pro Retina M1"');

        MainPage.$selectSearch.click();
        MainPage.$selectSearch.setValue('MacBook Pro Retina M1');
        browser.pause(5000);

        addStep('Отображается всплывающее окно с результатами поиска');
        expect(MainPage.$searchResults).toExist();

        addStep('В разделе “Подходящие товары” отображается товар с текстом “MacBook Pro Retina M1”');
        expect(MainPage.$searchResultOption).toExist();

    });

    it('Выбрать продукт', () => {

        addTestId("004");
        addStep('Выбираем товар - Открывается страница с товаром');
        MainPage.$selectProduct.click();
        browser.pause(2000);

        addStep('Title страницы содержит “Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 512SSD / 13.3 / Mac OS Big Sur / (MYD92RU/A)”');
        expect(browser).toHaveTitleContaining(productTitle);
        browser.pause(2000);

        addStep('Заголовок h1 содержит текст “Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 512SSD / 13.3 / Mac OS Big Sur / (MYD92RU/A)”');
        expect(ProductPage.$checkH1).toHaveTextContaining(productTitle);
        browser.pause(2000);
        
        addStep('Отображаются хлебные крошки “Главная > Ноутбуки и компьютеры > Ноутбуки и аксессуары > Ноутбуки> Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 512SSD / 13.3 / Mac OS Big Sur / (MYD92RU/A)”');
        expect(ProductPage.$checkBreadCrumps).toHaveTextContaining('Главная', 'Ноутбуки и компьютеры', 'Ноутбуки и аксессуары', 'Ноутбуки', productTitle);
        browser.pause(4000);
        
        addStep('Отображается кнопка “Добавить в корзину”');
        expect(ProductPage.$checkAddToCartButton).toExist();

        addStep('Отображается кредитный калькулятор');
        expect(ProductPage.$checkProductCreditCalculatorButton).toExist();

        addStep('Отображается информация о товаре (ProductDetails)');
        expect(ProductPage.$checkProductDetails).toExist();

        addStep('Отображается расширенная информация о товаре (ProductExtraInfo)');
        expect(ProductPage.$checkProductExtraInfo).toExist();

        addStep('По умолчанию активна вкладка “Технические характеристики”');
        expect(ProductPage.$checkActiveButton).toExist();
    });
});