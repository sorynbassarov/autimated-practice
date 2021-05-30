const MainPage = require('../pageobjects/main.page');
const GiftcardPage = require('../pageobjects/giftcard.page');
const { addFeature, addStory, addTestId, addStep } = require('@wdio/allure-reporter').default

describe('Проверка навигации по страницам', () => {

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

    it('Подтвердить выбор города', () => {

        addTestId("002");

        addStep('Подтверждаем выбор города - нажимаем кнопку ДА');
        MainPage.acceptCity();

        addStep('Модальное окно закрывается.');
        expect(MainPage.$checkCityModal).not.toExist();

        addStep('В левом верхнем углу отображается выбранный город.');
        expect(MainPage.$checkCity).toHaveTextContaining("Алматы");
        browser.pause(2000);

    });

    it('Открыть страницу по ссылке “+ Акции”', () => {

        addTestId("003");

        addStep('Кликаем на ссылку “+ Акции” в правом верхнем углу');
        MainPage.selectPromo();
        browser.pause(2000);

        addStep('Открывается страница /promo');
        expect(browser).toHaveUrlContaining('/promo');

        addStep('Title страницы содержит “Акции в Технодом | интернет магазин technodom.kz”');
        expect(browser).toHaveTitleContaining('Акции в Технодом | интернет магазин technodom.kz');
        browser.pause(2000);

    });

    it('Открыть страницу по ссылке “О компании”', () => {

        addTestId("004");

        addStep('В подвале сайта кликаем на ссылку “О компании”');
        browser.pause(5000);
        MainPage.selectAboutCompany();

        addStep('Открывается страница /company');
        expect(browser).toHaveUrlContaining('/company');

        addStep('Title страницы содержит “О компании Технодом | интернет магазин technodom.kz”');
        expect(browser).toHaveTitleContaining('О компании Технодом | интернет магазин technodom.kz');
        browser.pause(2000);

    });

    it('Открыть страницу по ссылке “Подарочные сертификаты”', () => {

        addTestId("005");

        addStep('В подвале сайта кликаем на ссылку “Подарочные сертификаты”');
        MainPage.selectGiftCards();

        addStep('Открывается страница /certificates');
        expect(browser).toHaveUrlContaining('/certificates');

        addStep('Title страницы содержит “Подарочные карты в Технодом | интернет магазин technodom.kz”');
        expect(browser).toHaveTitleContaining('Подарочные карты в Технодом | интернет магазин technodom.kz');

        addStep('Отображается кнопка “Скачать условия использования”');
        expect(GiftcardPage.$checkButton).toExist();

        addStep('Кнопка содержит ссылку “href="https://www.technodom.kz/under/content_files/new_card/ns_card.pdf"”');
        expect(GiftcardPage.$checkButtonLink).toHaveAttr('href', 'https://www.technodom.kz/under/banners/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%BF%D0%BE%20%20%D0%9F%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%BC%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%D0%BC.pdf')
        browser.pause(2000);

    });

});