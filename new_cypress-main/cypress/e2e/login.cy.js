describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки Забыли пароль
        cy.get('#mail').type('german@dolnikov.ru'); //нашла поле логин
        cy.get('#pass').type('iLoveqastudio1'); //нашла поле пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю

    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#forgotEmailButton').click(); // нажала забыли пароль
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //нашла поле email и ввела почту
        cy.get('#restoreEmailButton').click(); // нашла кнопку отправить код и нажала
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю, вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки Забыли пароль
        cy.get('#mail').type('german@dolnikov.ru'); //нашла поле логин
        cy.get('#pass').type('iLove2024'); //нашла поле пароль и ввела неверный пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю наличие текста
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю

    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки Забыли пароль
        cy.get('#mail').type('german@dol.ru'); //нашла поле логин и ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //нашла поле пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю

    })

    it('Валидация поля логин без @', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки Забыли пароль
        cy.get('#mail').type('germandolnikov.ru'); //нашла поле логин и ввела email без @
        cy.get('#pass').type('iLoveqastudio1'); //нашла поле пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки Забыли пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //нашла поле логин 
        cy.get('#pass').type('iLoveqastudio1'); //нашла поле пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю

    })

})


//+найти поле логин и ввести верный логин
//+найти поле пароль и ввсести правильнй пароль
//+найти кнопку войти и нажать ее
//+проветить что авторизация прошла успешо
