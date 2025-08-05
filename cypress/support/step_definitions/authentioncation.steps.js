import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import generatePassword from "../../support/utils/generatePassword";
import SignUpPage from '../../e2e/pages/SignUpPage';

const signUpPage = new SignUpPage();
let userData;
let password = generatePassword();
let randomUser = `userTest${Math.floor(Math.random() * 100)}`


before (() => {
    cy.fixture('userData').then((data) => {
        userData = data.user
    })
})


Given('the user needs to create a new account', () => {
  cy.visit('/');
  signUpPage.goToSignUpPage();
  signUpPage.verifySignUpModal();
})

When('register a new account with the following credentials', () => {
    signUpPage.fillSignUpForm(randomUser, password);
    signUpPage.submitSignUpForm();
})

Then('should it account be created successfully', () => {
    signUpPage.verifySuccessfulSignUp();
})

When('register a new account with existing username', () => {
    signUpPage.fillSignUpForm(userData.userName, userData.password);
    signUpPage.submitSignUpForm();
})

Then('should it display an error message', () => {
    signUpPage.verifyExistingUserMessage()
})


  