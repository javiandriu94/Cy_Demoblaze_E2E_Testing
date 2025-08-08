import LoginModules from "../modules/LoginModules";
import NavbarModules from "../modules/NavbarModules";


class LoginPage {
    constructor() {
        this.navbar = new NavbarModules();
        this.login = new LoginModules();
    }

    goToLoginPage() {
        this.navbar.loginLink.click();
    }

    verifyLoginModal() {
        this.login.loginModal.should('be.visible');
        this.login.usernameLoginInput.should('be.visible');
        this.login.passwordLoginInput.should('be.visible');
        this.login.loginButton.should('be.visible');
        
    }

    fillLoginForm(user, password) {
        this.login.usernameLoginInput.type(user,{force : true});
        this.login.passwordLoginInput.type(password, {force: true});
    }

    submitLoginForm() {
        this.login.loginButton.click({force: true});
        this.login.loginModal.should('not.be.visible')
    }



}

export default LoginPage;