import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../e2e/pages/LoginPage';
import ProductPage from '../../e2e/pages/ProductPage';
import CartPage from '../../e2e/pages/CartPage';
import NavbarModules from '../../e2e/modules/NavbarModules';


const login = new LoginPage();
const product =  new ProductPage();
const cart = new CartPage();
const navbar = new NavbarModules();
let userData;



before (() => {
    cy.fixture('userData').then((data) => {
        userData = data.user
    })
})


Given('the user wants to buy electronic devices', () => {
  cy.visit('/');
  login.goToLoginPage();
  login.verifyLoginModal();
  login.fillLoginForm(userData.userName, userData.password);
  login.submitLoginForm();
 
})

When('puts the items to the shopping create', () => {
    product.selectRandomProducts();
    navbar.cartLink.click();
    cart.clickPlacerOrderButton();
    
})

Then('fills the form and pays the order', () => {
    cart.fillPlaceOrderForm('Javi', 'Spain', 'Madrid', '1234567890123456', '12', '2025');
    cart.clickPurchaseButton();
    cart.verifyOrderConfirmation()
    cy.wait(2000)
    cart.clickOkButton();
    cy.location('pathname').should('eq', '/');
    navbar.logoutLink.click();
})

