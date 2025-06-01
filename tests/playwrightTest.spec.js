const { test, expect } = require('@playwright/test')
const { LoginPage } = require('./pages/login.page')
const { HomePage } = require('./pages/home.page')
const { ReimbursementPage } = require('./pages/expense-claim/reimbursement.page')
const { NavigationPage } = require('./pages/navigation.page')
const { faker } = require('@faker-js/faker');

test.describe("Project Reimbursement Request for Indonesia Office Approved by the PO", () => {
    let loginPage, homePage, reimbursementPage, navigationPage, codeOfReimbursementReq, reimbursementReqNotes, reimbursementReceipt, financeVerificationNote, reimbursementDescription, reimbursementFile;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        navigationPage = new NavigationPage(page);
        await loginPage.open();
    });

    test("Applicant: Create Corporate Reimbursement for ISD", async ({ page }) => {
        loginPage = new LoginPage(page);
        navigationPage = new NavigationPage(page);
        reimbursementPage = new ReimbursementPage(page);

        await loginPage.login("ghani.fakkar@ycp.com", "use!");
        await navigationPage.navigateToReimbursementRequest();
        // 10008783 - Feasibility Study - CPT New Business

        reimbursementReqNotes = faker.lorem.sentence(5);
        await reimbursementPage.createProjectReimbursement(" 10008783 - Feasibility Study - CPT New Business ", reimbursementReqNotes);

        reimbursementReceipt = faker.finance.accountNumber(8);
        reimbursementDescription = `${faker.finance.transactionDescription()}`;

        await reimbursementPage.addReimbursementItemReceipt('JPG', reimbursementReceipt, "2024-11-11", reimbursementDescription, "Printing & Stationery", "ISD", "70")
        await reimbursementPage.addReimbursementItemReceipt('PNG', reimbursementReceipt, "2024-11-05", reimbursementDescription, "Bank Charges", "ISD", "11")
        await reimbursementPage.addReimbursementItemReceipt('PDF', reimbursementReceipt, "2024-11-11", reimbursementDescription, "Market Research", "ISD", "120")
        await reimbursementPage.submitReimbursementRequest();
        codeOfReimbursementReq = await reimbursementPage.findCodeForReimbursementName(reimbursementReqName);
    })

    test("Finance: Verify the Corporate Reimbursement Request Designated to ISD", async ({ page }) => {
        loginPage = new LoginPage(page);
        navigationPage = new NavigationPage(page)
        reimbursementPage = new ReimbursementPage(page);

        await loginPage.login("delon.volkhard@ycp.com", "use!");
        await navigationPage.navigateToReimbursementRequest();
        financeVerificationNote = `verified by ${faker.person.fullName()}`
        await reimbursementPage.verifyReimbursementReq(codeOfReimbursementReq, financeVerificationNote);
        console.log(reimbursementReqName);
    })

    test("ISD BU Manager: Approve the Designated Corporate Reimbursement", async ({ page }) => {
        loginPage = new LoginPage(page);
        navigationPage = new NavigationPage(page)
        reimbursementPage = new ReimbursementPage(page);

        await loginPage.login("edo.karensa@ycp.com", "use!");
        await navigationPage.navigateToReimbursementRequest();
        await reimbursementPage.bumApprovalReimbursement(codeOfReimbursementReq);
        console.log(reimbursementReceipt);
    })
});