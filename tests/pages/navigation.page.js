const { expect } = require("@playwright/test");
const exp = require("constants");
// const exp = require("constants");

exports.NavigationPage = class NavigationPage {
    constructor(page){
        this.page = page;

        // Accounting Menu
        this.accountingMenu = page.getByRole('menuitem', {name: 'Accounting'});
        this.invoicePage = page.getByRole('link', {name: 'Invoice Feature to manage'})
        this.cogsPage = page.getByRole('link', {name: 'COGS Feature to manage COGS'})
        // Qase API 860b832ab1d0c918b63b550c84718ca7155560d32e8acfe4c4a0d99cb652336b
        // Assignment Menu
        this.assignmentMenu = page.getByRole('menuitem', {name: 'Assignment Assignment'});
        this.assignmentByProjectPage = page.getByRole('link', {name: 'Assignment By Project'});
        this.assignmentByPersonPage = page.getByRole('link', {name: 'Assignment By Person'});
        this.utilizationRatePage = page.getByRole('link', {name: 'Utilization Rate Utilization'});

        // Business Selection Process Menu
        this.bspMenu = page.getByRole('menuitem', {name: 'Business Selection Process'});
        this.bizSelectionProcess = page.getByRole('link', {name: 'Business Selection Process'});
        this.bspAdminTab = page.getByRole('link', { name: 'Admin' });
        this.assignmentByPersonPage = page.getByRole('link', {name: 'Approval Approve the'});
        
        // Contribution Menu
        this.contributionMenu = page.getByRole('menuitem', {name: 'Contribution Contribution'});
        this.partnerContributionPage = page.getByRole('link', {name: 'Partner Contribution View'});
        this.contributionByOfficePage = page.getByRole('link', {name: 'Contribution by Office View'});
        
        // Database Menu        
        this.databaseMenu = page.getByRole('menuitem', {name: 'Database'});
        this.clientPage = page.getByRole('link', {name: 'Client Manage Client Database'});
        this.credentialPage = page.getByRole('link', {name: 'Credential Credential Database'});
        this.vendorPage = page.getByRole('link', {name: 'Vendor Manage Vendor Database'});
        
        // YCP Professional
        this.ycpProfessionalMenu = page.getByRole('menuitem', {name: 'YCP Professional'});
        
        // Expense Claim Menu
        this.expenseClaimMenu = page.getByRole('menuitem', {name: 'Expense Claim'});
        this.reimbursementPage = page.getByRole('link', {name: 'Reimbursement Manage'});
        this.bizTripPage = page.getByRole('link', {name: 'Business Trip Manage Business'});
        this.bizTripAdmin = page.getByRole('link', { name: 'Admin' });
        this.meetingConferencePage = page.getByRole('link', {name: 'Meeting & Conference Manage'});
        this.expenseRequestPage = page.getByRole('link', {name: 'Expense Request Manage'});
        this.paymentRequestPage = page.getByRole('link', {name: 'Payment Request Manage'});

        
        this.journalMenu = page.getByRole('menuitem', {name: 'Journal'});
        this.journalPage = page.getByRole('link', {name: 'Journal Read Journal'});
        this.journalReportPage = page.getByRole('link', {name: 'Report Journal Report'});

        this.payrollMenu = page.getByRole('menuitem', {name: 'Payroll'});

        this.pipelineMenu = page.getByRole('menuitem', {name: 'Pipeline'});

        this.projectMenu = page.getByRole('menuitem', { name: 'Project' });
        this.projectPage = page.getByRole('link', {name: 'Project Manage Projects'});
        this.projectExtensionPage = page.getByRole('link', {name: 'Extension Manage Project'});

        this.unsignedProjectTab = page.getByRole('link', { name: 'Unsigned Project' });


        this.settingMenu = page.getByRole('menuitem', {name: 'Setting'});
        this.individualExpensePage = page.getByRole('link', {name: 'Individual Expense Manage'});
        this.internalRatePage = page.getByRole('link', {name: 'Internal Rate Manage Internal'});
        this.projectApproverPage = page.getByRole('link', {name: 'Project Approver Manage'});
        

        this.workManagementMenu = page.getByRole('menuitem', {name: 'Work Management'});
        this.leavePage = page.getByRole('link', {name: 'Leave Manage Leave'});

        this.accountIcon = page.locator("nav").filter({hasText: "Hub Search for Module or Function" }).getByRole("button").nth(3);
    }

    async navigateToReimbursementRequest(){
        await this.expenseClaimMenu.click();
        await this.reimbursementPage.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/reimbursement/my-reimbursement");
        await expect.soft(this.page.getByRole('heading', { name: "Reimbursement" })).toBeVisible();
    }

    async navigateToBizTripRequest(){
        await this.expenseClaimMenu.click();
        await this.bizTripPage.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/business-trip/my-business-trip");
        await expect.soft(this.page.getByRole('heading', { name: "Business Trip" })).toBeVisible();
    }

    async navigateToBizTripRequestAdmin(){
        await this.expenseClaimMenu.click();
        await this.bizTripPage.click();
        await this.bizTripAdmin.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/business-trip/admin");
        await this.page.waitForLoadState('load');
        await expect.soft(this.page.locator('#search-bar div').filter({ hasText: 'Search...' }).nth(1)).toBeVisible();
    }

    async navigateToMnCRequest(){
        await this.expenseClaimMenu.click();
        await this.meetingConferencePage.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/meeting-conferences/my-meeting-conferences");
        await this.page.waitForLoadState('load');
        await expect.soft(this.page.getByRole('heading', { name: "Meeting & Conferences" })).toBeVisible();
    }

    async navigateToExpenseRequest(){
        await this.expenseClaimMenu.click();
        await this.expenseRequestPage.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/expense/my-expense");
        await this.page.waitForLoadState('load');
        await expect.soft(this.page.getByRole('heading', { name: "Expenses" })).toBeVisible();
    }

    async navigateToPaymentRequest(){
        await this.expenseClaimMenu.click();
        await this.paymentRequestPage.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/payment-request/my-payment-request");
        await expect.soft(this.page.getByRole('heading', { name: "Payment Request" })).toBeVisible();
    }

    async navigateToPayroll(){
        await this.payrollMenu.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/payrolls");
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByRole('heading', { name: "Payroll" })).toBeVisible();
    }

    async navigateToPipeline(){
        await this.pipelineMenu.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/pipeline");
    }

    async navigateToProject(){
        await this.projectMenu.click();
        await this.projectPage.click();
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/projects");
    }

    async navigateToUnsignedProject(){
        await this.projectMenu.click();
        await this.projectPage.click();
        await this.unsignedProjectTab.click();
        await expect.soft(this.page).toHaveURL("https://hub4-dev.ycps.digital/unsigned-projects");
    }

    async navigateToBSPAdminTab(){
        await this.bspMenu.click();
        await this.bizSelectionProcess.click();
        await expect.soft(this.page).toHaveURL("https://hub4-dev.ycps.digital/bsp/list/client");
        await this.bspAdminTab.click();
        await expect.soft(this.page).toHaveURL("https://hub4-dev.ycps.digital/bsp/admin/client");
    }
}