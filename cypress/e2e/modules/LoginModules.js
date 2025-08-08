class LoginModules {
     get usernameLoginInput() {
        return cy.get('#loginusername');
    }

    get passwordLoginInput() {
        return cy.get('#loginpassword');
    }

    get loginModal() {
        return cy.get('#logInModal .modal-content');
    }

    get loginButton() {
        return cy.get('#logInModal .btn.btn-primary').contains('Log in');
    }
}

export default LoginModules