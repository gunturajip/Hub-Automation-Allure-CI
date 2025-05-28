# Test info

- Name: Project Reimbursement Request for Indonesia Office Approved by the PO >> ISD BU Manager: Approve the Designated Corporate Reimbursement
- Location: /home/runner/work/Hub-Automation-Allure-CI/Hub-Automation-Allure-CI/tests/playwrightTest.spec.js:52:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'OM/PO Admin' })

    at ReimbursementPage.bumApprovalReimbursement (/home/runner/work/Hub-Automation-Allure-CI/Hub-Automation-Allure-CI/tests/pages/expense-claim/reimbursement.page.js:433:28)
    at /home/runner/work/Hub-Automation-Allure-CI/Hub-Automation-Allure-CI/tests/playwrightTest.spec.js:59:33
```

# Page snapshot

```yaml
- navigation:
  - button:
    - img
  - link:
    - /url: /
    - img
  - button "Search for Module or Function Alt+S":
    - img
    - text: Search for Module or Function Alt+S
  - button:
    - img
  - link "Go to Nexus":
    - /url: https://nexus.ycp.com/
    - img
    - text: Go to Nexus
  - button "Edo Karensa"
  - text: "Quick Access :"
  - link "LV My Leave":
    - /url: /leave/my-leave
  - link "RE My Reimbursement":
    - /url: /reimbursement/my-reimbursement
- navigation:
  - menuitem "Home":
    - img
    - text: Home
  - menuitem "Accounting":
    - img
    - text: Accounting
    - img
  - menuitem "Assignment":
    - img
    - text: Assignment
    - img
  - menuitem "Business Selection Process":
    - img
    - text: Business Selection Process
    - img
  - menuitem "Database":
    - img
    - text: Database
    - img
  - menuitem "YCP Professional":
    - img
    - text: YCP Professional
  - menuitem "Expense Claim":
    - img
    - text: Expense Claim
    - img
  - menuitem "Journal":
    - img
    - text: Journal
    - img
  - menuitem "Pipeline":
    - img
    - text: Pipeline
  - menuitem "Project":
    - img
    - text: Project
    - img
  - menuitem "Work Management":
    - img
    - text: Work Management
    - img
- main:
  - navigation "Breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: /
          - img
          - text: Home
      - listitem:
        - img
        - link "My Reimbursement":
          - /url: /reimbursement/my-reimbursement
  - img
  - text: "Other Expense Claim :"
  - link "Business Trip":
    - /url: /business-trip/my-business-trip
  - heading "Reimbursement" [level=1]
  - img
  - list:
    - listitem: Search...
  - img
  - text: Create Reimbursement
  - table:
    - rowgroup:
      - row "Amount Status Finance Note Code Project / Reimbursement name Payroll Period Created":
        - cell "Amount"
        - cell
        - cell "Status"
        - cell "Finance Note"
        - cell "Code"
        - cell "Project / Reimbursement name"
        - cell "Payroll Period"
        - cell "Created"
        - cell
  - table:
    - rowgroup:
      - row "IDR 1,034,131.87 2 | 1 Approved - R-00021445 Corporate Expense APPSET-64 May - 2025 Apr 21, 2025":
        - cell "IDR 1,034,131.87":
          - paragraph: IDR 1,034,131.87
        - cell "2 | 1"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021445"
        - cell "Corporate Expense APPSET-64":
          - paragraph: Corporate Expense APPSET-64
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 21, 2025":
          - paragraph: Apr 21, 2025
        - cell
      - row "IDR 0.00 0 | 3 Rejected test R-00021446 Corporate Expense APPSET-65 May - 2025 Apr 21, 2025":
        - cell "IDR 0.00":
          - paragraph: IDR 0.00
        - cell "0 | 3"
        - cell "Rejected"
        - cell "test":
          - paragraph: test
        - cell "R-00021446"
        - cell "Corporate Expense APPSET-65":
          - paragraph: Corporate Expense APPSET-65
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 21, 2025":
          - paragraph: Apr 21, 2025
        - cell
      - row "IDR 15,000.00 1 | 1 Approved - R-00021427 Corporate Expense HUB-2882 May - 2025 Apr 17, 2025":
        - cell "IDR 15,000.00":
          - paragraph: IDR 15,000.00
        - cell "1 | 1"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021427"
        - cell "Corporate Expense HUB-2882":
          - paragraph: Corporate Expense HUB-2882
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 17, 2025":
          - paragraph: Apr 17, 2025
        - cell
      - row "IDR 0.00 0 | 2 Rejected test R-00021428 Corporate Expense HUB-2882 May - 2025 Apr 17, 2025":
        - cell "IDR 0.00":
          - paragraph: IDR 0.00
        - cell "0 | 2"
        - cell "Rejected"
        - cell "test":
          - paragraph: test
        - cell "R-00021428"
        - cell "Corporate Expense HUB-2882":
          - paragraph: Corporate Expense HUB-2882
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 17, 2025":
          - paragraph: Apr 17, 2025
        - cell
      - row "IDR 5,200.00 2 | 0 Draft - R-00021393 Corporate Expense SDCRER-01 May - 2025 Apr 16, 2025":
        - cell "IDR 5,200.00":
          - paragraph: IDR 5,200.00
        - cell "2 | 0"
        - cell "Draft"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021393"
        - cell "Corporate Expense SDCRER-01":
          - paragraph: Corporate Expense SDCRER-01
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 16, 2025":
          - paragraph: Apr 16, 2025
        - cell
      - row "IDR 4,500.00 2 | 0 Verified - R-00021392 Corporate Expense APPSET-46 May - 2025 Apr 16, 2025":
        - cell "IDR 4,500.00":
          - paragraph: IDR 4,500.00
        - cell "2 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021392"
        - cell "Corporate Expense APPSET-46":
          - paragraph: Corporate Expense APPSET-46
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 16, 2025":
          - paragraph: Apr 16, 2025
        - cell
      - row "IDR 752,065.93 3 | 0 Verified - R-00021422 Corporate Expense APPSET-65 May - 2025 Apr 16, 2025":
        - cell "IDR 752,065.93":
          - paragraph: IDR 752,065.93
        - cell "3 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021422"
        - cell "Corporate Expense APPSET-65":
          - paragraph: Corporate Expense APPSET-65
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 16, 2025":
          - paragraph: Apr 16, 2025
        - cell
      - row "IDR 942,065.93 3 | 0 Verified - R-00021421 Corporate Expense APPSET-64 May - 2025 Apr 16, 2025":
        - cell "IDR 942,065.93":
          - paragraph: IDR 942,065.93
        - cell "3 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021421"
        - cell "Corporate Expense APPSET-64":
          - paragraph: Corporate Expense APPSET-64
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 16, 2025":
          - paragraph: Apr 16, 2025
        - cell
      - row "IDR 7,500.00 2 | 0 Verified - R-00021391 Corporate Expense APPSET-47 May - 2025 Apr 15, 2025":
        - cell "IDR 7,500.00":
          - paragraph: IDR 7,500.00
        - cell "2 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021391"
        - cell "Corporate Expense APPSET-47":
          - paragraph: Corporate Expense APPSET-47
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 15, 2025":
          - paragraph: Apr 15, 2025
        - cell
      - row "IDR 17,100.00 2 | 0 Verified - R-00021390 Corporate Expense APPSET-46 May - 2025 Apr 15, 2025":
        - cell "IDR 17,100.00":
          - paragraph: IDR 17,100.00
        - cell "2 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021390"
        - cell "Corporate Expense APPSET-46":
          - paragraph: Corporate Expense APPSET-46
        - cell "May - 2025":
          - paragraph: May - 2025
        - cell "Apr 15, 2025":
          - paragraph: Apr 15, 2025
        - cell
      - row "IDR 10,010.00 1 | 0 Submitted - R-00021289 10010798 - [Test] Digital Energy Resource Management System Development Apr - 2025 Mar 19, 2025":
        - cell "IDR 10,010.00":
          - paragraph: IDR 10,010.00
        - cell "1 | 0"
        - cell "Submitted"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021289"
        - cell "10010798 - [Test] Digital Energy Resource Management System Development":
          - paragraph: 10010798 - [Test] Digital Energy Resource Management System Development
        - cell "Apr - 2025":
          - paragraph: Apr - 2025
        - cell "Mar 19, 2025":
          - paragraph: Mar 19, 2025
        - cell
      - row "IDR 30,000.00 3 | 0 Approved verified by Kerry Hackett III R-00021159 Corporate Expense Expense 2 Mar - 2025 Feb 12, 2025":
        - cell "IDR 30,000.00":
          - paragraph: IDR 30,000.00
        - cell "3 | 0"
        - cell "Approved"
        - cell "verified by Kerry Hackett III":
          - paragraph: verified by Kerry Hackett III
        - cell "R-00021159"
        - cell "Corporate Expense Expense 2":
          - paragraph: Corporate Expense Expense 2
        - cell "Mar - 2025":
          - paragraph: Mar - 2025
        - cell "Feb 12, 2025":
          - paragraph: Feb 12, 2025
        - cell
      - row "IDR 30,000.00 3 | 0 Approved verified by Russell Mayert R-00021158 Corporate Expense Expense 3 Mar - 2025 Feb 12, 2025":
        - cell "IDR 30,000.00":
          - paragraph: IDR 30,000.00
        - cell "3 | 0"
        - cell "Approved"
        - cell "verified by Russell Mayert":
          - paragraph: verified by Russell Mayert
        - cell "R-00021158"
        - cell "Corporate Expense Expense 3":
          - paragraph: Corporate Expense Expense 3
        - cell "Mar - 2025":
          - paragraph: Mar - 2025
        - cell "Feb 12, 2025":
          - paragraph: Feb 12, 2025
        - cell
      - row "IDR 30,000.00 3 | 0 Verified verified by Naomi Hodkiewicz R-00021157 Corporate Expense Expense 2 Mar - 2025 Feb 12, 2025":
        - cell "IDR 30,000.00":
          - paragraph: IDR 30,000.00
        - cell "3 | 0"
        - cell "Verified"
        - cell "verified by Naomi Hodkiewicz":
          - paragraph: verified by Naomi Hodkiewicz
        - cell "R-00021157"
        - cell "Corporate Expense Expense 2":
          - paragraph: Corporate Expense Expense 2
        - cell "Mar - 2025":
          - paragraph: Mar - 2025
        - cell "Feb 12, 2025":
          - paragraph: Feb 12, 2025
        - cell
      - row "IDR 30,000.00 3 | 0 Verified verified by Frankie Rolfson R-00021156 Corporate Expense Expense 0 Mar - 2025 Feb 12, 2025":
        - cell "IDR 30,000.00":
          - paragraph: IDR 30,000.00
        - cell "3 | 0"
        - cell "Verified"
        - cell "verified by Frankie Rolfson":
          - paragraph: verified by Frankie Rolfson
        - cell "R-00021156"
        - cell "Corporate Expense Expense 0":
          - paragraph: Corporate Expense Expense 0
        - cell "Mar - 2025":
          - paragraph: Mar - 2025
        - cell "Feb 12, 2025":
          - paragraph: Feb 12, 2025
        - cell
      - row "IDR 400,000.00 2 | 0 Approved - R-00021101 Corporate Expense EWADDR-07 Jun - 2025 Dec 02, 2024":
        - cell "IDR 400,000.00":
          - paragraph: IDR 400,000.00
        - cell "2 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021101"
        - cell "Corporate Expense EWADDR-07":
          - paragraph: Corporate Expense EWADDR-07
        - cell "Jun - 2025":
          - paragraph: Jun - 2025
        - cell "Dec 02, 2024":
          - paragraph: Dec 02, 2024
        - cell
      - row "IDR 750,000.00 2 | 1 Approved EWADDR-01A R-00021093 10008895 - YCP Holdings | Firm Marketing Support (IDN Portion) Jun - 2025 Dec 02, 2024":
        - cell "IDR 750,000.00":
          - paragraph: IDR 750,000.00
        - cell "2 | 1"
        - cell "Approved"
        - cell "EWADDR-01A":
          - paragraph: EWADDR-01A
        - cell "R-00021093"
        - cell "10008895 - YCP Holdings | Firm Marketing Support (IDN Portion)":
          - paragraph: 10008895 - YCP Holdings | Firm Marketing Support (IDN Portion)
        - cell "Jun - 2025":
          - paragraph: Jun - 2025
        - cell "Dec 02, 2024":
          - paragraph: Dec 02, 2024
        - cell
      - row "IDR 800,000.00 2 | 0 Approved - R-00021100 10008895 - YCP Holdings | Firm Marketing Support (IDN Portion) Jun - 2025 Dec 02, 2024":
        - cell "IDR 800,000.00":
          - paragraph: IDR 800,000.00
        - cell "2 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021100"
        - cell "10008895 - YCP Holdings | Firm Marketing Support (IDN Portion)":
          - paragraph: 10008895 - YCP Holdings | Firm Marketing Support (IDN Portion)
        - cell "Jun - 2025":
          - paragraph: Jun - 2025
        - cell "Dec 02, 2024":
          - paragraph: Dec 02, 2024
        - cell
      - row "IDR 3,600,000.00 2 | 1 Approved EWADDR-01b R-00021094 Corporate Expense EWADDR-01B Jun - 2025 Dec 02, 2024":
        - cell "IDR 3,600,000.00":
          - paragraph: IDR 3,600,000.00
        - cell "2 | 1"
        - cell "Approved"
        - cell "EWADDR-01b":
          - paragraph: EWADDR-01b
        - cell "R-00021094"
        - cell "Corporate Expense EWADDR-01B":
          - paragraph: Corporate Expense EWADDR-01B
        - cell "Jun - 2025":
          - paragraph: Jun - 2025
        - cell "Dec 02, 2024":
          - paragraph: Dec 02, 2024
        - cell
      - row "IDR 200,000.00 1 | 0 Approved - R-00021102 Corporate Expense check Dec - 2024 Dec 02, 2024":
        - cell "IDR 200,000.00":
          - paragraph: IDR 200,000.00
        - cell "1 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021102"
        - cell "Corporate Expense check":
          - paragraph: Corporate Expense check
        - cell "Dec - 2024":
          - paragraph: Dec - 2024
        - cell "Dec 02, 2024":
          - paragraph: Dec 02, 2024
        - cell
  - table:
    - rowgroup:
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
  - table:
    - rowgroup:
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row "Edit":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Edit":
          - link "Edit":
            - /url: /reimbursement/3d9a72fe-4eae-405b-8460-59c8d45f0b49/edit
            - img
            - text: Edit
          - button:
            - img
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row "Edit":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Edit":
          - link "Edit":
            - /url: /reimbursement/f116a08b-7b19-4256-b924-cde3f048ae29/edit
            - img
            - text: Edit
          - button:
            - img
          - button:
            - img
      - row "Edit":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Edit":
          - link "Edit":
            - /url: /reimbursement/aa359ede-4915-4890-8252-d27db798fb7b/edit
            - img
            - text: Edit
          - button:
            - img
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row "Edit":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Edit":
          - link "Edit":
            - /url: /reimbursement/0325749e-bd04-4f35-abb5-251a204bb318/edit
            - img
            - text: Edit
          - button:
            - img
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
      - row:
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell:
          - button:
            - img
```

# Test source

```ts
  333 |         await expect(this.reimbursementItemReceiptAssert).toBeVisible();
  334 |         await this.receiptNumber.fill(receiptNo)
  335 |         await this.reimbursementItemDate.click()
  336 |         await this.itemDatePicker(date).click()
  337 |         await this.companyName.fill(compName)
  338 |         await this.reimbursementDesc.fill(reimbursementdesc)
  339 |         await this.reimbursementCategory.click()
  340 |         await this.itemCategoryDropdownValue(category).click()
  341 |         await this.reimbursementDivision.click()
  342 |         await this.itemDivisionDropdownValue(division).click()
  343 |         await this.rechargeToClient.click();
  344 |         await this.vat.click();
  345 |         await this.creditTax.click();
  346 |         await this.creditTaxDropdownValue(creditItem).click();
  347 |         await this.reimbursementAmountJP.fill(amount);
  348 |         await this.vatPercentage.click();
  349 |         await this.vatDropdownValue(vatValue).click();
  350 |         await this.page.waitForTimeout(3000)
  351 |         await this.taxAmount.fill(taxRounding)
  352 |         await this.page.waitForTimeout(3000)
  353 |         await this.participantFromClient.fill(participantFromClient)
  354 |         await this.participantFromComp.fill(participantFromComp)
  355 |         await this.addItemButton.click()
  356 |     }
  357 |
  358 |     async submitReimbursementRequest() {
  359 |         await this.submitReimbursementReq.click()
  360 |         await this.page.waitForTimeout(3000);
  361 |         await expect(this.page).toHaveURL("https://hub4-dev.ycps.digital/reimbursement/my-reimbursement")
  362 |         // here
  363 |         // await expect(this.submittedReqStatus).toBeVisible({timeout: 3000});
  364 |     }
  365 |
  366 |     async findCodeForReimbursementName(reimbursementName) {
  367 |         const codeElement = await this.reimbursementNameSelector(reimbursementName);
  368 |         const codeValue = await codeElement.textContent();
  369 |         return codeValue.trim();
  370 |     }
  371 |
  372 |     async expectSubmitted(reimbursementName) {
  373 |         const codeElement = await this.reimbursementNameSelector(reimbursementName);
  374 |         const submittedStatus = await codeElement.getByText('Submitted');
  375 |         await expect(this.submittedStatus).toContainText('Submitted');
  376 |         // const submittedStatus = await codeElement.textContent();
  377 |         // return codeValue.trim();
  378 |     }
  379 |
  380 |     async verifyReimbursementReq(reimbursementCode, verifNote) {
  381 |         await this.adminButton.click();
  382 |         await this.itemReimbursement(reimbursementCode).click();
  383 |         await this.verifyLinkButton.click();
  384 |         await this.approvalFile.setInputFiles('../../../fixtures/approvalFinance.zip')
  385 |         await this.page.waitForTimeout(3000);
  386 |         // await expect(this.approvalFileAssertion).toBeVisible();
  387 |         await this.verificationNote.fill(verifNote);
  388 |         await this.verifyButton.click();
  389 |         await this.page.waitForTimeout(3000);
  390 |         // await expect(this.rejectButtonAssertVerif).toBeVisible();
  391 |     }
  392 |
  393 |     async rejectReimbursementReqFin(reimbursementCode, rejectionNote) {
  394 |         await this.adminButton.click();
  395 |         await this.itemReimbursement(reimbursementCode).click();
  396 |         await this.page.waitForTimeout(3000);
  397 |         await this.financeReject.click();
  398 |         await this.financeRejectNote.fill(rejectionNote);
  399 |         await this.financeRejectPopUp.click();
  400 |         await this.page.waitForTimeout(2000)
  401 |         await expect(this.financeRejectAssertion).toBeVisible();
  402 |         // await expect(this.verificationInfo).toBeVisible();
  403 |     }
  404 |
  405 |     async markingReimbursementAsPaid(reimbursementName) {
  406 |         await this.adminButton.click();
  407 |         await this.searchInput.click();
  408 |         await this.approvedFilter.click();
  409 |         await this.searchButton.click();
  410 |         await this.page.waitForTimeout(3000);
  411 |         const markAsPaidButton = await this.markReimbursementAsPaid(reimbursementName);
  412 |         await this.markAsPaidButton.click();
  413 |         await expect(this.markedAsPaid).toBeVisible();
  414 |     }
  415 |
  416 |     async rejectReimbursementReqBum(reimbursementCode, rejectionNote) {
  417 |         await this.poAdmin.click();
  418 |         await this.searchInput.click();
  419 |         await this.allFilter.click();
  420 |         await this.searchButton.click();
  421 |         await this.itemReimbursement(reimbursementCode).click();
  422 |         await this.page.waitForTimeout(3000);
  423 |         await this.financeReject.click();
  424 |         await this.financeRejectNote.fill(rejectionNote);
  425 |         await this.financeRejectPopUp.click();
  426 |         await this.page.waitForTimeout(2000)
  427 |         await expect(this.financeRejectAssertion).toBeVisible();
  428 |         // await expect(this.verificationInfo).toBeVisible();
  429 |     }
  430 |
  431 |     // BU Manager ID Office
  432 |     async bumApprovalReimbursement(reimbursementCode) {
> 433 |         await this.poAdmin.click();
      |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  434 |         await this.searchInput.click();
  435 |         await this.allFilter.click();
  436 |         await this.searchButton.click();
  437 |         await this.itemReimbursement(reimbursementCode).click();
  438 |         await this.page.waitForTimeout(3000);
  439 |         await this.approveButton.click();
  440 |         await this.page.waitForTimeout(3000);
  441 |         // await expect(this.approveMessageInfo).toBeVisible();
  442 |     }
  443 |
  444 |     // Office Manager
  445 |     async officeManagerApprovalReimbursement(reimbursementCode) {
  446 |         await this.poAdmin.click();
  447 |         await this.itemReimbursement(reimbursementCode).click();
  448 |         await this.page.waitForTimeout(3000);
  449 |         await this.approveButton.click();
  450 |         await expect(this.approveMessageInfo).toBeVisible();
  451 |     }
  452 |
  453 |     // Assertion for the Finance
  454 |     async Report(reimbursementCode) {
  455 |         await this.finOMBUMReport.click();
  456 |         await this.page.waitForTimeout(3000);
  457 |         await expect(this.itemReimbursement).toBeVisible();
  458 |     }
  459 |
  460 |
  461 | }
```