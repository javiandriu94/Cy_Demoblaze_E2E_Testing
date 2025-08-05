class SignUpModules {

    get usernameInput() {
        return cy.get('#sign-username');
    }

    get passwordInput() {
        return cy.get('#sign-password');
    }

    get signUpModal() {
        return cy.get('#signInModal .modal-content');
    }

    get signUpButton() {
        return cy.get('[type="button"]').contains('Sign up');
    }
}

export default SignUpModules;