class NavbarModules{

    get signUpLink () {
        return cy.get('[data-target="#signInModal"]')
    }

    get loginLink () {
        return cy.get('[data-target="#logInModal"]')
    }

    get cartLink () {
        return cy.get('#navbarExample #cartur')
    }

   
}

export default NavbarModules;