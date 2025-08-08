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

    get homeLink () {
        return cy.get('.active > .nav-link')
    }

    get logoutLink () {
        return cy.get('#logout2')
    }

   
}

export default NavbarModules;