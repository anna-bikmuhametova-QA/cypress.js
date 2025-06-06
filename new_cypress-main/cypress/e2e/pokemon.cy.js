describe('Проверка покупки нового аватара', function () {

   it('Покупка нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/login'); //зашла на сайт
        cy.get('#k_email').type(' USER_LOGIN'); //нашла поле логин и ввела его
        cy.get('#k_password').type('USER_PASSWORD'); //нашла поле пароль и ввела его
        cy.get('.MuiButton-root').click(); //нажала войти
        cy.wait(3000); // ожидание
        cy.get('.header_card_trainer').click(); // нажала на аву тренера
        cy.get('.k_mobile > :nth-child(5)').click(); // нажала на кнопку Смена аватара
        cy.wait(3000); //ожидание
        cy.get('.available > button').first().click(); // кликаем Купить первого доступного аватара
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('2202200273752202'); // нашла поле номер карты и ввела номер карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');  // нашла поле код и ввела CVV карты
        cy.get(':nth-child(1) > .style_1_base_input').type('0926'); // нашла поле срок действия карты и ввела его
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('ANNA BIK');   // нашла поле имя владельца карты и ввела его
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //нашла кнопку Оплатить и нажала ее
        cy.get('.style_1_base_input').type('56456');  // вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); //проверяю, что после покупки вижу текст
        cy.get('.payment_status_top_title').should('be.visible'); // текст виден пользователю

       
    })
})





