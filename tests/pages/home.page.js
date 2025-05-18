const { expect } = require("@playwright/test");
const exp = require("constants");

exports.HomePage = class HomePage {
    constructor(page){
        this.page = page;

        this.accountIcon = page.locator("nav").filter({hasText: "Hub Search for Module or Function" }).getByRole("button").nth(3);
        this.messageToast = page.locator('[id="__layout"]');
        this.homeSidebar = page.getByRole('menuitem', {name: 'Home'});
        this.homePageURL = '';
        // this.successPopUpLogin = page.locator('.flex-1.w-0.px-3.py-2.5.flex.items-start')
    //        await expect(page.getByText('Successfully Logged In!')).toBeVisible();
    }

    async verifySuccessLogin(){
        await expect(this.accountIcon).toBeVisible();
        await expect(this.messageToast).toBeVisible();
        await expect(this.homeSidebar).toBeVisible();
        this.homePageURL = await this.page.url()
        await expect(this.homePageURL).toBe("https://hub4-dev.ycps.digital/")
        // await expect(this.successPopUpLogin).toBeVisible();
        // await expect(this.messageToast).toContainText(welcomeText)
    }

    async verifyFailedLogin(errorMessage){
        await expect(this.accountIcon).not.toBeVisible();
        // await expect(this.messageToast).toContainEqual(errorMessage);
    }
}