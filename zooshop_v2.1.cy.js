describe('Проверка раскрывающего меню',  () => {
    it('ввод в работу раскрывающего меню', () => {
        cy.visit('https://zooshop.online/');
    it('проверка кнопки выбора языка', () => {
        cy.get('[title="Latviešu"] > :nth-child(1) > .wpml-ls-native').click()})
  
        cy.get('[href="https://zooshop.online/product-category/suniem-metala-buri-matraci-transportesanas-kastes-somas-manezas/"] > span').trigger('mouseover');
        cy.get('#menu-item-6344 > :nth-child(1) > span').trigger('mouseover');
        cy.get('[href="https://zooshop.online/product-category/bariba-kakiem-suniem-grauzejiem-putniem/"] > span').trigger('mouseover');
        cy.get('[href="https://zooshop.online/product-category/kakiem/"] > span').trigger('mouseover');
        cy.get('[href="https://zooshop.online/product-category/preces-putniem/"] > span').trigger('mouseover');
        cy.get('[href="https://zooshop.online/product-category/preces-grauzejiem/"] > span').trigger('mouseover');
        cy.get('[href="https://zooshop.online/product-category/piederumi-akvarija-zivim/"] > span').trigger('mouseover');
        cy.get('#menu-item-11064 > a > span').trigger('mouseover');
        cy.get('#menu-item-11064 > a > span').trigger('mouseover');
        cy.get('[href="https://zooshop.online/product-category/bariba-kakiem-suniem-grauzejiem-putniem/"] > span').click();
        cy.get('#menu-item-3609 > [href="https://zooshop.online/product-category/suniem-metala-buri-matraci-transportesanas-kastes-somas-manezas/"] > span').click();
        cy.get('[href="https://zooshop.online/product-category/kakiem/"] > span').click();
        cy.get('[href="https://zooshop.online/product-category/preces-putniem/"] > span').click();
        cy.get('[href="https://zooshop.online/product-category/preces-grauzejiem/"] > span').click();
        cy.get('[href="https://zooshop.online/product-category/piederumi-akvarija-zivim/"] > span').click();
        cy.get('#menu-item-11064 > a > span').click();
        cy.get('.top_bar_right_wrapper > #header_cart > .icon-basket').click();
        cy.get('.button').click();
        cy.get('.logo-main').click();              
      })
  })  
