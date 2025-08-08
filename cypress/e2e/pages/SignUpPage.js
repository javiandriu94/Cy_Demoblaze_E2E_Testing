import NavbarModules from "../modules/NavbarModules";
import SignUpModules from "../modules/SignUpModules";

class SignUpPage {
    constructor() {
        this.navbar = new NavbarModules();
        this.signUp = new SignUpModules();
    }

    goToSignUpPage() {
        this.navbar.signUpLink.click();
    }

    verifySignUpModal() {
        this.signUp.signUpModal.should('be.visible');
        this.signUp.usernameInput.should('be.visible');
        this.signUp.passwordInput.should('be.visible');
        this.signUp.signUpButton.should('be.visible');
        cy.wait(500)

    }

    fillSignUpForm(user, password) {
        this.signUp.usernameInput.type(user);
        this.signUp.passwordInput.type(password);
    }

    submitSignUpForm() {
        this.signUp.signUpButton.click();
    }

    verifySuccessfulSignUp() {
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
        })
    }

    verifyExistingUserMessage() {
        cy.on('window:alert', (text) => {
            expect(text).to.contains('This user already exist.');
        })
    }


}

export default SignUpPage;