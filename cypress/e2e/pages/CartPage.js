import CartModules from "../modules/CartModules";

class CartPage {
    constructor() {
        this.cart = new CartModules()
    }

    clickPlacerOrderButton () {
        this.cart.placeOrderButton.click()
    }

    fillPlaceOrderForm(name, country, city, creditCard, month, year) {
        this.cart.placeOrderModal.within(() => {
            cy.get('#name').type(name);
            cy.get('#country').type(country);
            cy.get('#city').type(city);
            cy.get('#card').type(creditCard);
            cy.get('#month').type(month);
            cy.get('#year').type(year);
        })
    }
      clickPurchaseButton() {
        this.cart.purchaseButton.click({force: true});
    }

    verifyOrderConfirmation() {
        this.cart.orderConfirmationMessage.should('be.visible');
    }

    clickOkButton() {
        this.cart.OkButton.click({force: true});
        
    }

  
}

export default CartPage;