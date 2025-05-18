const { expect } = require("@playwright/test");

exports.ReimbursementPage = class ReimbursementPage {
    constructor(page) {
        this.page = page;

        // ======================================================== Create Reimbursement ======================================================== 
        this.clickCreateReimbursement = page.locator('a').filter({ hasText: 'Create Reimbursement' });

        // Reimbursement Expense Type Selection
        this.selectExpenseType = page.getByPlaceholder('Select Expense Type');
        this.selectProjectName = page.getByPlaceholder('Select project name');
        this.itemProjectDropDownValue = (itemProject) => {
            return page.locator('li').filter({ hasText: itemProject })
        }
        // this. page.locator('li').filter({ hasText: '10008919 - ID Food |' }).click();

        // ======================================================== Reimbursement Request Form ========================================================
        this.reimbursementBulk = page.getByText('Drop a file here or click to upload XLS OR XLSX');
        this.uploadBulkAssert = page.getByText('Change').nth(2);
        this.uploadBulkButton = page.getByRole('button', { name: 'Upload Bulk' })
        this.projectType = page.getByText('Project Expense');
        this.corporateType = page.getByText('Corporate Expense');
        this.monthlyType = page.getByText('Individual Expense - Monthly');
        this.rentType = page.getByPlaceholder('Individual Expense - Rent Program');
        this.expenseName = page.getByPlaceholder('Type reimbursement name');
        this.expenseNote = page.getByPlaceholder('Place a note here...');
        this.idOM = page.getByRole('radio', { name: 'Septian Waluyan' });
        this.jpOM = page.getByRole('radio', { name: 'Nobuiku Nyudo' });

        // ======================================================== Add Reimbursement Item ========================================================
        this.addItem = page.getByRole('button', { name: 'Add Item' }).first(); // Add Item Button
        this.receiptNumber = page.locator('div').filter({ hasText: /^Receipt No\.$/ }).getByRole('textbox'); // Receipt Number Field
        this.reimbursementItemDate = page.locator('input[name="date"]'); // Reimbursement Item Date
        this.itemDatePicker = (itemDate) => {
            return page.locator(`td[title='${itemDate}']`);
        };
        this.reimbursementDesc = page.getByRole('dialog', { name: 'dialog' }).locator('textarea'); // Reimbursement Item Description
        this.reimbursementCategory = page.getByPlaceholder('Select Category'); // Reimbursement Item Category
        this.itemCategoryDropdownValue = (itemCategory) => {
            return page.locator("li").filter({ hasText: itemCategory });
        };
        this.reimbursementDivision = page.getByPlaceholder('Select Division'); // Reimbursement Item Division
        this.itemDivisionDropdownValue = (itemDivision) => {
            return page.locator("li").filter({ hasText: itemDivision });
        };
        this.rechargeToClient = page.getByText('Recharge to Client as T&E'); // Recharge to Client Checklist
        this.vat = page.getByText('GSV/VAT Applicable'); // GSV Checklist
        this.vatPercentage = page.locator('#add-reimbursement div').filter({ hasText: 'Tax 0%1%2%3%4%5%6%7%8%9%10%11' }).getByPlaceholder('Select'); // GSV Percentage Selection
        this.vatDropdownValue = (vatValue) => {
            return page.locator("li").filter({ hasText: `${vatValue}` });
        };

        this.vatPercentageProject = page.locator('#add-reimbursement div').filter({ hasText: 'Tax 0%1%2%3%4%5%6%7%8%9%10%11' }).getByPlaceholder('Select');
        this.vatDropdownValueProject = (vatValueProject) => {
            return page.locator("li").first().filter({ hasText: `${vatValueProject}` });
        };

        this.reimbursementAmount = page.getByPlaceholder('0');
        this.taxAmount = page.getByPlaceholder('0').nth(1);

        this.reimbursementItemReceipt = page.locator('label').filter({ hasText: 'Drop a file here or click to upload PNG, JPG or PDF' });
        this.reimbursementItemReceiptAssert = page.getByText('Change', { exact: true });
        this.receiptAtOnceSwitch = page.getByRole('switch').locator('span').first();
        this.receiptAtOnceFile = page.locator('label').filter({ hasText: 'Drop a file here or click to upload only *.zip' })
        this.uploadReceiptAtOnceAssert = page.getByText('Change', { exact: true });

        // reimbursement amount jp
        this.reimbursementAmountJP = page.locator('#add-reimbursement div').filter({ hasText: '* Amount (with GST/VAT)' }).getByPlaceholder('0');

        this.reimbursementItemFile = page.getByText('Drop a file here or click to upload PNG, JPG or PDF');
        this.addItemButton = page.getByRole('dialog').getByRole('button', { name: 'Add Item' });
        this.submitReimbursementReq = page.getByRole('button', { name: 'Submit Request' });

        // for Japan Office
        this.companyName = page.locator('div').filter({ hasText: /^Company Name$/ }).getByRole('textbox');
        this.advRequest = page.getByRole('button', { name: 'Link with Advance Request' });
        //  => error
        this.advRequestDropdownValue = (advReqItem) => {
            // return page.locator("li").filter({hasText: advReqItem});
            // return page.locator.getByText(advReqItem)
            return page.locator('.px-4.sm\\:px-5 > .block.relative.bg-white.p-4.border-[1.5px].rounded-md.cursor-pointer.overflow-hidden').filter({ hasText: advReqItem });
        }
        // this.advRequestItem = page.getByText('MC-0000171').click();
        this.confirmAdvReqButton = page.getByRole('button', { name: 'Confirm' });
        this.creditTax = page.getByPlaceholder('Select Credit Tax');
        this.creditTaxDropdownValue = (creditTaxValue) => {
            return page.locator('li').filter({ hasText: creditTaxValue })
        }
        // this.page.locator('li').filter({ hasText: 'Qualified invoice/receipt' }).click();
        this.participantFromClient = page.getByPlaceholder('0').nth(2);
        this.participantFromComp = page.getByPlaceholder('0').nth(3);

        this.reimbursementNameSelector = async (reimbursementName) => {
            // First, find the row that contains the reimbursement name
            const rowWithReimbursementName = this.page.locator(`div.cell:has-text("${reimbursementName}")`).locator("xpath=ancestor::tr");

            // within that row, find the cell that contains the code.
            // Assuming the code is uniquely identifiable by its link with class `text-blue-500`
            const codeElement = await rowWithReimbursementName.locator("div.cell a.text-blue-500").first();
            return codeElement;
        };

        this.submittedReqStatus = async (reimbursementName) => {
            // First, find the row that contains the reimbursement name
            const rowWithReimbursementName = this.page.locator(`div.cell:has-text("${reimbursementName}")`).locator("xpath=ancestor::tr");
            const submittedStatus = this.page.locator(rowWithReimbursementName).locator('bg-gray-100')
            return submittedStatus
            // here 2
            // await expect(rowWithReimbursementName.locator('bg-gray-100')).toBeVisible();
        };



        // ======================================================== For Finance Verification ========================================================
        this.adminButton = page.getByRole("link", { name: "Admin" });

        this.itemReimbursement = (itemReimbursement) => {
            return page.getByRole("cell", { name: itemReimbursement }).locator("a");
        }

        this.verifyLinkButton = page.getByRole("link", { name: "Verify" });

        this.verificationNote = page.locator(".el-textarea__inner");

        this.verifyButton = page.getByRole("button", { name: "Verify" });

        this.financeReject = page.getByRole('button', { name: 'Reject' }).first();

        this.financeRejectNote = page.locator('textarea')

        this.financeRejectPopUp = page.getByLabel('dialog').getByRole('button', { name: 'Reject' })

        this.financeRejectAssertion = page.getByText('Claim has been rejected')

        this.verificationInfo = page.getByText('Claim has been verified');

        this.rejectButtonAssertVerif = page.getByRole('button', { name: "Reject" });

        this.approvalFile = page.getByText('PNG, JPG, PDF, ZIP');

        this.approvalFileAssertion = page.getByText('Change', { exact: true })

        this.messageInfo = page.locator(".mt-1.text-sm").nth(1);

        // For Finance Assertion in Reimbursement Report
        this.finOMBUMReport = page.getByRole("link", { name: "Reports" });

        // For Assertion OM BUM 

        // For BUM OM JP Approval

        this.poAdmin = page.getByRole("link", { name: "OM/PO Admin" });

        // this.searchInput = page.getByText("Search...");
        this.searchInput = page.locator('#search-bar div').filter({ hasText: 'Status: "Submitted" Search...' }).nth(1);

        this.allFilter = page.locator("label").filter({ hasText: "Verified" });

        // this.allFilterJP = page.locator("label").filter({ hasText: "All" });

        this.searchButton = page.getByRole("button", {
            name: "Search",
            exact: true,
        });

        this.approveButton = page.getByRole("button", { name: "Approve" });

        this.approveMessageInfo = page.getByText("Claim item has been approved");

        this.bumReject = page.getByRole('button', { name: 'Reject' }).first();

        this.bumRejectNote = page.locator('textarea')

        this.bumRejectPopUp = page.getByLabel('dialog').getByRole('button', { name: 'Reject' })

        this.bumRejectAssertion = page.getByText('Claim has been rejected')
        // for JP Office Approval
        // this.allFilterJP = page.locator("label").filter({ hasText: "Verified" });

        this.approvedFilter = page.locator("label").filter({ hasText: "Approved" });

        this.markReimbursementAsPaid = async (reimbursementName) => {
            const rowOfReimbursementReq = this.page.locator(`div.cell:has-text("${reimbursementName}")`).locator("xpath=ancestor::tr");
            const markAsPaid = await rowOfReimbursementReq.getByRole("button", { name: "Mark as Paid" });
            return markAsPaid;
        };

        this.paidMessageInfo = page.getByText("Claim item has been mark as paid");

    }


    async createReimbursementRequest(requestType, expensename, expensenote) {
        await this.clickCreateReimbursement.click();
        await this.selectExpenseType.click();

        switch (requestType) {
            case 'Corporate':
                await this.corporateType.click();
                break;
            case 'Monthly':
                await this.monthlyType.click();
                break;
            default:
                throw new Error('Unsupported reimbursement request type');
        }

        await this.expenseName.fill(expensename);
        await this.expenseNote.fill(expensenote);
        await this.receiptAtOnceSwitch.click();
        await this.receiptAtOnceFile.setInputFiles('../../../fixtures/test.zip');
        await this.page.waitForTimeout(3000);
        await expect(this.uploadReceiptAtOnceAssert).toBeVisible();
    }

    async createReimbursementMonthlyToOM(officeManager, expensename, expensenote) {
        await this.clickCreateReimbursement.click();
        if (officeManager === 'ID') {
            await this.idOM.click();
        } else if (officeManager === 'JP') {
            await this.jpOM.click();
        } else {
            throw new Error('Invalid office manager specified');
        }
        await this.selectExpenseType.click();
        await this.monthlyType.click();
        await this.expenseName.fill(expensename);
        await this.expenseNote.fill(expensenote);
        await this.receiptAtOnceSwitch.click();
        await this.receiptAtOnceFile.setInputFiles('../../../fixtures/test.zip');
        await this.page.waitForTimeout(3000);
        await expect(this.uploadReceiptAtOnceAssert).toBeVisible();
    }

    async uploadBulkReimbursement(filePath) {
        await this.reimbursementBulk.setInputFiles(filePath);
        await this.page.waitForTimeout(5000);
        await expect(this.uploadBulkAssert).toBeVisible();
        await this.uploadBulkButton.click();
        await this.page.waitForTimeout(5000);
    }

    async createProjectReimbursement(projectName, expensenote) {

        await this.clickCreateReimbursement.click();
        await this.selectProjectName.click()
        await this.itemProjectDropDownValue(projectName).click();
        // await this.corporateType.click()
        await this.expenseNote.fill(expensenote);
    }

    async addReimbursementItemReceipt(fileType, receiptNo, date, reimbursementdesc, category, division, amount, vatValue, taxRounding) {
        await this.addItem.click();

        switch (fileType) {
            case 'JPG':
                await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/image.jpg');
                break;
            case 'PNG':
                await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/test.png');
                break;
            case 'PDF':
                await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/test.pdf');
                break;
            default:
                throw new Error('Unsupported file type');
        }

        await expect(this.reimbursementItemReceiptAssert).toBeVisible();

        await this.receiptNumber.fill(receiptNo);
        await this.reimbursementItemDate.click();
        await this.itemDatePicker(date).click();
        await this.reimbursementDesc.fill(reimbursementdesc);
        await this.reimbursementCategory.click();
        await this.itemCategoryDropdownValue(category).click();
        await this.reimbursementDivision.click();
        await this.itemDivisionDropdownValue(division).click();
        await this.reimbursementAmount.fill(amount);
        await this.rechargeToClient.click();
        await this.vat.click();
        await this.vatPercentage.click();
        await this.vatDropdownValue(vatValue).click();
        await this.taxAmount.fill(taxRounding);
        await this.addItemButton.click();
    }


    async adminTab() {
        await this.adminButton.click();
        await this.page.waitForURL('https://hub4-dev.ycps.digital/reimbursement/admin');
        await expect(this.page).toHaveURL('https://hub4-dev.ycps.digital/reimbursement/admin');
    }

    async addReimbursementItemProject(receiptNo, date, reimbursementdesc, category, division, amount, vatValueProject, taxRounding) {
        await this.addItem.click()
        await this.receiptNumber.fill(receiptNo)
        await this.reimbursementItemDate.click()
        await this.itemDatePicker(date).click()
        await this.reimbursementDesc.fill(reimbursementdesc)
        await this.reimbursementCategory.click()
        await this.itemCategoryDropdownValue(category).click()
        await this.reimbursementDivision.click()
        await this.itemDivisionDropdownValue(division).click()
        await this.reimbursementAmount.fill(amount)
        await this.rechargeToClient.click();
        await this.vat.click()
        await this.vatPercentageProject.click()
        await this.vatDropdownValueProject(vatValueProject).click()
        await this.taxAmount.fill(taxRounding)
        await this.addItemButton.click()
    }


    // For Japan Office
    async addReimbursementItemJapan(fileType, receiptNo, date, compName, reimbursementdesc, category, division, creditItem, amount, vatValue, taxRounding, participantFromClient, participantFromComp, filePath) {
        await this.addItem.click()

        switch (fileType) {
            case 'JPG':
                await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/image.jpg');
                break;
            case 'PNG':
                await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/test.png');
                break;
            case 'PDF':
                await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/test.pdf');
                break;
            default:
                throw new Error('Unsupported file type');
        }
        await expect(this.reimbursementItemReceiptAssert).toBeVisible();
        await this.receiptNumber.fill(receiptNo)
        await this.reimbursementItemDate.click()
        await this.itemDatePicker(date).click()
        await this.companyName.fill(compName)
        await this.reimbursementDesc.fill(reimbursementdesc)
        await this.reimbursementCategory.click()
        await this.itemCategoryDropdownValue(category).click()
        await this.reimbursementDivision.click()
        await this.itemDivisionDropdownValue(division).click()
        await this.rechargeToClient.click();
        await this.vat.click();
        await this.creditTax.click();
        await this.creditTaxDropdownValue(creditItem).click();
        await this.reimbursementAmountJP.fill(amount);
        await this.vatPercentage.click();
        await this.vatDropdownValue(vatValue).click();
        await this.page.waitForTimeout(3000)
        await this.taxAmount.fill(taxRounding)
        await this.page.waitForTimeout(3000)
        await this.participantFromClient.fill(participantFromClient)
        await this.participantFromComp.fill(participantFromComp)
        await this.addItemButton.click()
    }

    async submitReimbursementRequest() {
        await this.submitReimbursementReq.click()
        await this.page.waitForTimeout(3000);
        await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/reimbursement/my-reimbursement")
        // here
        // await expect(this.submittedReqStatus).toBeVisible({timeout: 3000});
    }

    async findCodeForReimbursementName(reimbursementName) {
        const codeElement = await this.reimbursementNameSelector(reimbursementName);
        const codeValue = await codeElement.textContent();
        return codeValue.trim();
    }

    async expectSubmitted(reimbursementName) {
        const codeElement = await this.reimbursementNameSelector(reimbursementName);
        const submittedStatus = await codeElement.getByText('Submitted');
        await expect(this.submittedStatus).toContainText('Submitted');
        // const submittedStatus = await codeElement.textContent();
        // return codeValue.trim();
    }

    async verifyReimbursementReq(reimbursementCode, verifNote) {
        await this.adminButton.click();
        await this.itemReimbursement(reimbursementCode).click();
        await this.verifyLinkButton.click();
        await this.approvalFile.setInputFiles('../../../fixtures/approvalFinance.zip')
        await this.page.waitForTimeout(3000);
        // await expect(this.approvalFileAssertion).toBeVisible();
        await this.verificationNote.fill(verifNote);
        await this.verifyButton.click();
        await this.page.waitForTimeout(3000);
        // await expect(this.rejectButtonAssertVerif).toBeVisible();
    }

    async rejectReimbursementReqFin(reimbursementCode, rejectionNote) {
        await this.adminButton.click();
        await this.itemReimbursement(reimbursementCode).click();
        await this.page.waitForTimeout(3000);
        await this.financeReject.click();
        await this.financeRejectNote.fill(rejectionNote);
        await this.financeRejectPopUp.click();
        await this.page.waitForTimeout(2000)
        await expect(this.financeRejectAssertion).toBeVisible();
        // await expect(this.verificationInfo).toBeVisible();
    }

    async markingReimbursementAsPaid(reimbursementName) {
        await this.adminButton.click();
        await this.searchInput.click();
        await this.approvedFilter.click();
        await this.searchButton.click();
        await this.page.waitForTimeout(3000);
        const markAsPaidButton = await this.markReimbursementAsPaid(reimbursementName);
        await this.markAsPaidButton.click();
        await expect(this.markedAsPaid).toBeVisible();
    }

    async rejectReimbursementReqBum(reimbursementCode, rejectionNote) {
        await this.poAdmin.click();
        await this.searchInput.click();
        await this.allFilter.click();
        await this.searchButton.click();
        await this.itemReimbursement(reimbursementCode).click();
        await this.page.waitForTimeout(3000);
        await this.financeReject.click();
        await this.financeRejectNote.fill(rejectionNote);
        await this.financeRejectPopUp.click();
        await this.page.waitForTimeout(2000)
        await expect(this.financeRejectAssertion).toBeVisible();
        // await expect(this.verificationInfo).toBeVisible();
    }

    // BU Manager ID Office
    async bumApprovalReimbursement(reimbursementCode) {
        await this.poAdmin.click();
        await this.searchInput.click();
        await this.allFilter.click();
        await this.searchButton.click();
        await this.itemReimbursement(reimbursementCode).click();
        await this.page.waitForTimeout(3000);
        await this.approveButton.click();
        await this.page.waitForTimeout(3000);
        // await expect(this.approveMessageInfo).toBeVisible();
    }

    // Office Manager
    async officeManagerApprovalReimbursement(reimbursementCode) {
        await this.poAdmin.click();
        await this.itemReimbursement(reimbursementCode).click();
        await this.page.waitForTimeout(3000);
        await this.approveButton.click();
        await expect(this.approveMessageInfo).toBeVisible();
    }

    // Assertion for the Finance
    async Report(reimbursementCode) {
        await this.finOMBUMReport.click();
        await this.page.waitForTimeout(3000);
        await expect(this.itemReimbursement).toBeVisible();
    }


}