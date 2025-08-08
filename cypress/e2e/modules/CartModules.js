
class CartModules {
    get placeOrderButton () {
        return cy.get('[type="button"]').contains('Place Order')
    }

    get placeOrderModal () {
        return cy.get('#orderModal .modal-content')
    }

    get purchaseButton () {
        return cy.get('.btn-primary').contains('Purchase')
    }

    get orderConfirmationMessage () {
        return cy.get('.sweet-alert h2').contains('Thank you for your purchase!')
    }

    get OkButton () {
        return cy.get('.confirm')
    }
}

export default CartModules;