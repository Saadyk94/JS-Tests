describe('find item', function () {
    it('find item', function () {
        cy.visit('https://www.amazon.com/').wait(5000);
        cy.get('.hm-icon').click()
        cy.get('.hmenu-visible > :nth-child(10) > .hmenu-item').trigger('mouseover').wait(5000).click()
        cy.get('.hmenu-visible > :nth-child(4) > .hmenu-item').first().click()
        cy.get('#low-price').click().type('200{enter}')
        cy.get('[data-asin="B07QDZZQK5"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
        cy.get('#add-to-cart-button').click()
        cy.get('#nav-cart').click()
        
        


    })
  })  