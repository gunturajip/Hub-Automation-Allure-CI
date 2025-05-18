const { expect } = require("@playwright/test");
const { executionAsyncId } = require("async_hooks");

exports.LoginPage = class LoginPage{
    // blok untuk deklarasi elemen halaman login 
    constructor(page){
        this.page = page;

        this.loginHeader = page.getByRole('heading', { name: 'Login' });
        this.secondaryLogin = page.getByRole('button', {name: "Or Login with YCP Email"})
        this.emailField =  page.locator('input[type="email"]')
        this.passwordField = page.locator('input[type="password"]');
        this.submitButton = page.getByRole('button', { name: 'Login', exact: true });
        this.profileButton = page.locator('nav').filter({ hasText: "Hub Search for Module or" }).getByRole('button').nth(3);
        this.logoutButton = page.getByRole('button', {name: 'Logout' })
    }

    // blok untuk deklarasi aksi aksi pada halaman login
    async open(){
        await this.page.goto('https://hub4-dev.ycps.digital/login/');
        await this.page.waitForURL('https://hub4-dev.ycps.digital/login/');
        await expect(this.loginHeader).toBeVisible();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/login/");
        await expect(this.page).toHaveTitle("Login - Hub 4.0");
    }

    async login(email, password){
        await this.secondaryLogin.click();
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }

    async logout(){
        await this.profileButton.click();
        await this.logoutButton.click();
        // await this.page.reload();
        await this.page.waitForURL('https://hub4-dev.ycps.digital/login/');
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/login/");
        await expect(this.loginHeader).toBeVisible();
    }
}
