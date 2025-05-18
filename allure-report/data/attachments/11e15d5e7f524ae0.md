# Test info

- Name: Project Reimbursement Request for Indonesia Office Approved by the PO >> Finance: Verify the Corporate Reimbursement Request Designated to ISD
- Location: D:\Kuliah\___BACK_END_YCPS\Hub-Automation-Allure-CI\tests\playwrightTest.spec.js:40:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('cell').locator('a') resolved to 75 elements:
    1) <a data-v-4d46d381="" class="inline-block text-xs text-blue-500 border-b border-blue-300 border-dashed cursor-pointer">↵                  R-00021523↵               </a> aka getByRole('cell', { name: 'R-00021523' }).locator('a')
    2) <a type="" data-v-4d46d381="" class="relative inline-flex items-center justify-center leading-none font-semibold transition-colors border cursor-pointer min-w-max opacity-100 hover:opacity-80 active:opacity-100 disabled:opacity-50 bg-white border-gray-300 text-primary gap-x-1.5 text-xs px-2 py-1 gap-1 p-1.5 text-[10px] rounded-[4px]">…</a> aka getByRole('row', { name: 'IDR 40,000.00 1 | 0 Submitted' }).locator('a').nth(1)
    3) <a data-v-4d46d381="" class="inline-block text-xs text-blue-500 border-b border-blue-300 border-dashed cursor-pointer">↵                  R-00021521↵               </a> aka getByRole('cell', { name: 'R-00021521' }).locator('a')
    4) <a type="" data-v-4d46d381="" class="relative inline-flex items-center justify-center leading-none font-semibold transition-colors border cursor-pointer min-w-max opacity-100 hover:opacity-80 active:opacity-100 disabled:opacity-50 bg-white border-gray-300 text-primary gap-x-1.5 text-xs px-2 py-1 gap-1 p-1.5 text-[10px] rounded-[4px]">…</a> aka getByRole('row', { name: 'IDR 100,000.00 1 | 0' }).locator('a').nth(1)
    5) <a data-v-4d46d381="" class="inline-block text-xs text-blue-500 border-b border-blue-300 border-dashed cursor-pointer">↵                  R-00021519↵               </a> aka getByRole('cell', { name: 'R-00021519' }).locator('a')
    6) <a type="" data-v-4d46d381="" class="relative inline-flex items-center justify-center leading-none font-semibold transition-colors border cursor-pointer min-w-max opacity-100 hover:opacity-80 active:opacity-100 disabled:opacity-50 bg-white border-gray-300 text-primary gap-x-1.5 text-xs px-2 py-1 gap-1 p-1.5 text-[10px] rounded-[4px]">…</a> aka getByRole('row', { name: 'IDR 13,000.00 4 | 0 Submitted' }).locator('a').nth(1)
    7) <a data-v-4d46d381="" class="inline-block text-xs text-blue-500 border-b border-blue-300 border-dashed cursor-pointer">↵                  R-00021518↵               </a> aka getByRole('cell', { name: 'R-00021518' }).locator('a')
    8) <a data-v-4d46d381="" class="inline-block text-xs text-blue-500 border-b border-blue-300 border-dashed cursor-pointer">↵                  R-00021516↵               </a> aka getByRole('cell', { name: 'R-00021516' }).locator('a')
    9) <a type="" data-v-4d46d381="" class="relative inline-flex items-center justify-center leading-none font-semibold transition-colors border cursor-pointer min-w-max opacity-100 hover:opacity-80 active:opacity-100 disabled:opacity-50 bg-white border-gray-300 text-primary gap-x-1.5 text-xs px-2 py-1 gap-1 p-1.5 text-[10px] rounded-[4px]">…</a> aka getByRole('row', { name: 'IDR 30,000.00 2 | 0 Submitted' }).locator('a').nth(1)
    10) <a data-v-4d46d381="" class="inline-block text-xs text-blue-500 border-b border-blue-300 border-dashed cursor-pointer">↵                  R-00021515↵               </a> aka getByRole('cell', { name: 'R-00021515' }).locator('a')
    ...

Call log:
  - waiting for getByRole('cell').locator('a')

    at ReimbursementPage.verifyReimbursementReq (D:\Kuliah\___BACK_END_YCPS\Hub-Automation-Allure-CI\tests\pages\expense-claim\reimbursement.page.js:382:57)
    at D:\Kuliah\___BACK_END_YCPS\Hub-Automation-Allure-CI\tests\playwrightTest.spec.js:48:9
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
  - button:
    - img
  - text: "Quick Access :"
  - link "LV My Leave":
    - /url: /leave/my-leave
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
  - menuitem "Contribution":
    - img
    - text: Contribution
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
  - menuitem "Payroll":
    - img
    - text: Payroll
  - menuitem "Pipeline":
    - img
    - text: Pipeline
  - menuitem "Project":
    - img
    - text: Project
    - img
  - menuitem "Setting":
    - img
    - text: Setting
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
        - link "Reimbursement Admin":
          - /url: /reimbursement/admin
  - img
  - text: "Other Expense Claim :"
  - link "Business Trip":
    - /url: /business-trip/my-business-trip
  - heading "Reimbursement" [level=1]
  - link "My Reimbursement":
    - /url: /reimbursement/my-reimbursement
  - link "Admin":
    - /url: /reimbursement/admin
  - link "Reports":
    - /url: /reimbursement/reports
  - list:
    - listitem: "Status: \"All\""
    - listitem: Search...
  - table:
    - rowgroup:
      - row "Amount Status Finance Note Code Requested By Project / Reimbursement Name Note":
        - cell
        - cell "Amount"
        - cell
        - cell "Status"
        - cell "Finance Note"
        - cell "Code"
        - cell "Requested By"
        - cell "Project / Reimbursement Name"
        - cell "Note"
        - cell
  - table:
    - rowgroup:
      - row "IDR 40,000.00 1 | 0 Submitted - R-00021523 Afif Ridha Ramadhan 18 May 2025 Corporate Expense Expense 2 Veritatis cupio capio suscipio ipsam.":
        - cell
        - cell "IDR 40,000.00":
          - paragraph: IDR 40,000.00
        - cell "1 | 0"
        - cell "Submitted"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021523"
        - cell "Afif Ridha Ramadhan 18 May 2025":
          - paragraph: Afif Ridha Ramadhan
          - paragraph: 18 May 2025
        - cell "Corporate Expense Expense 2":
          - paragraph: Corporate Expense Expense 2
        - cell "Veritatis cupio capio suscipio ipsam.":
          - paragraph: Veritatis cupio capio suscipio ipsam.
        - cell
      - row "IDR 100,000.00 1 | 0 Submitted - R-00021521 Ananda Fitria 15 May 2025 Corporate Expense -":
        - cell
        - cell "IDR 100,000.00":
          - paragraph: IDR 100,000.00
        - cell "1 | 0"
        - cell "Submitted"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021521"
        - cell "Ananda Fitria 15 May 2025":
          - paragraph: Ananda Fitria
          - paragraph: 15 May 2025
        - cell "Corporate Expense":
          - paragraph: Corporate Expense
        - cell "-":
          - paragraph: "-"
        - cell
      - row "IDR 13,000.00 4 | 0 Submitted - R-00021519 Joey Irvine Julianto 08 May 2025 Corporate Expense HUB-2962 Corporate Expense HUB-2962":
        - cell
        - cell "IDR 13,000.00":
          - paragraph: IDR 13,000.00
        - cell "4 | 0"
        - cell "Submitted"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021519"
        - cell "Joey Irvine Julianto 08 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 08 May 2025
        - cell "Corporate Expense HUB-2962":
          - paragraph: Corporate Expense HUB-2962
        - cell "Corporate Expense HUB-2962":
          - paragraph: Corporate Expense HUB-2962
        - cell
      - row "IDR 3,000.00 1 | 1 Verified - R-00021518 Joey Irvine Julianto 08 May 2025 Corporate Expense HUB-2962 Corporate Expense HUB-2962":
        - cell
        - cell "IDR 3,000.00":
          - paragraph: IDR 3,000.00
        - cell "1 | 1"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021518"
        - cell "Joey Irvine Julianto 08 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 08 May 2025
        - cell "Corporate Expense HUB-2962":
          - paragraph: Corporate Expense HUB-2962
        - cell "Corporate Expense HUB-2962":
          - paragraph: Corporate Expense HUB-2962
        - cell
      - row "IDR 30,000.00 2 | 0 Submitted - R-00021516 Lutfiyan Riza Amada 07 May 2025 Corporate Expense HUB-2953 Corporate Expense HUB-2953 2":
        - cell
        - cell "IDR 30,000.00":
          - paragraph: IDR 30,000.00
        - cell "2 | 0"
        - cell "Submitted"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021516"
        - cell "Lutfiyan Riza Amada 07 May 2025":
          - paragraph: Lutfiyan Riza Amada
          - paragraph: 07 May 2025
        - cell "Corporate Expense HUB-2953":
          - paragraph: Corporate Expense HUB-2953
        - cell "Corporate Expense HUB-2953 2":
          - paragraph: Corporate Expense HUB-2953 2
        - cell
      - row "IDR 30,000.00 1 | 0 Submitted - R-00021515 Lutfiyan Riza Amada 07 May 2025 Corporate Expense HUB-2953 HUB-2953 edited by applicant":
        - cell
        - cell "IDR 30,000.00":
          - paragraph: IDR 30,000.00
        - cell "1 | 0"
        - cell "Submitted"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021515"
        - cell "Lutfiyan Riza Amada 07 May 2025":
          - paragraph: Lutfiyan Riza Amada
          - paragraph: 07 May 2025
        - cell "Corporate Expense HUB-2953":
          - paragraph: Corporate Expense HUB-2953
        - cell "HUB-2953 edited by applicant":
          - paragraph: HUB-2953 edited by applicant
        - cell
      - row "IDR 11,100.00 2 | 0 Verified - R-00021517 Lutfiyan Riza Amada 07 May 2025 Corporate Expense HUB-2953 3 Corporate Expense HUB-2953 3 edited item, removed item, and added item when submitted as draft":
        - cell
        - cell "IDR 11,100.00":
          - paragraph: IDR 11,100.00
        - cell "2 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021517"
        - cell "Lutfiyan Riza Amada 07 May 2025":
          - paragraph: Lutfiyan Riza Amada
          - paragraph: 07 May 2025
        - cell "Corporate Expense HUB-2953 3":
          - paragraph: Corporate Expense HUB-2953 3
        - cell "Corporate Expense HUB-2953 3 edited item, removed item, and added item when submitted as draft":
          - paragraph: Corporate Expense HUB-2953 3 edited item, removed item, and added item when submitted as draft
        - cell
      - row "IDR 4,000.00 2 | 0 Approved - R-00021496 Joey Irvine Julianto 06 May 2025 [QA] Scenario 1 [QA] Scenario 1":
        - cell
        - cell "IDR 4,000.00":
          - paragraph: IDR 4,000.00
        - cell "2 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021496"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 1":
          - paragraph: "[QA] Scenario 1"
        - cell "[QA] Scenario 1":
          - paragraph: "[QA] Scenario 1"
        - cell
      - row "IDR 5,100.00 2 | 0 Approved - R-00021497 Joey Irvine Julianto 06 May 2025 [QA] Scenario 2 [QA] Scenario 2":
        - cell
        - cell "IDR 5,100.00":
          - paragraph: IDR 5,100.00
        - cell "2 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021497"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 2":
          - paragraph: "[QA] Scenario 2"
        - cell "[QA] Scenario 2":
          - paragraph: "[QA] Scenario 2"
        - cell
      - row "IDR 5,750.00 3 | 0 Approved - R-00021498 Joey Irvine Julianto 06 May 2025 [QA] Scenario 3 [QA] Scenario 3":
        - cell
        - cell "IDR 5,750.00":
          - paragraph: IDR 5,750.00
        - cell "3 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021498"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 3":
          - paragraph: "[QA] Scenario 3"
        - cell "[QA] Scenario 3":
          - paragraph: "[QA] Scenario 3"
        - cell
      - row "IDR 6,001.00 3 | 0 Approved - R-00021500 Joey Irvine Julianto 06 May 2025 [QA] Scenario 5 [QA] Scenario 5 edited by applicant":
        - cell
        - cell "IDR 6,001.00":
          - paragraph: IDR 6,001.00
        - cell "3 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021500"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 5":
          - paragraph: "[QA] Scenario 5"
        - cell "[QA] Scenario 5 edited by applicant":
          - paragraph: "[QA] Scenario 5 edited by applicant"
        - cell
      - row "IDR 6,500.00 3 | 0 Approved - R-00021501 Joey Irvine Julianto 06 May 2025 [QA] Scenario 6 [QA] Scenario 6":
        - cell
        - cell "IDR 6,500.00":
          - paragraph: IDR 6,500.00
        - cell "3 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021501"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 6":
          - paragraph: "[QA] Scenario 6"
        - cell "[QA] Scenario 6":
          - paragraph: "[QA] Scenario 6"
        - cell
      - row "IDR 1,188,069.77 4 | 0 Approved - R-00021511 Joey Irvine Julianto 06 May 2025 Corporate Expense -":
        - cell
        - cell "IDR 1,188,069.77":
          - paragraph: IDR 1,188,069.77
        - cell "4 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021511"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "Corporate Expense":
          - paragraph: Corporate Expense
        - cell "-":
          - paragraph: "-"
        - cell
      - row "IDR 1,200.00 2 | 0 Verified riza R-00021495 Joey Irvine Julianto 06 May 2025 Corporate Expense Check Approver -":
        - cell
        - cell "IDR 1,200.00":
          - paragraph: IDR 1,200.00
        - cell "2 | 0"
        - cell "Verified"
        - cell "riza":
          - paragraph: riza
        - cell "R-00021495"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "Corporate Expense Check Approver":
          - paragraph: Corporate Expense Check Approver
        - cell "-":
          - paragraph: "-"
        - cell
      - row "IDR 6,000.00 2 | 0 Verified - R-00021502 Joey Irvine Julianto 06 May 2025 [QA] Scenario 7 [QA] Scenario 7":
        - cell
        - cell "IDR 6,000.00":
          - paragraph: IDR 6,000.00
        - cell "2 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021502"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 7":
          - paragraph: "[QA] Scenario 7"
        - cell "[QA] Scenario 7":
          - paragraph: "[QA] Scenario 7"
        - cell
      - row "IDR 524,034.88 2 | 1 Verified - R-00021512 Joey Irvine Julianto 06 May 2025 Corporate Expense -":
        - cell
        - cell "IDR 524,034.88":
          - paragraph: IDR 524,034.88
        - cell "2 | 1"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021512"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "Corporate Expense":
          - paragraph: Corporate Expense
        - cell "-":
          - paragraph: "-"
        - cell
      - row "IDR 0.00 0 | 3 Rejected test R-00021499 Joey Irvine Julianto 06 May 2025 [QA] Scenario 4 [QA] Scenario 4":
        - cell
        - cell "IDR 0.00":
          - paragraph: IDR 0.00
        - cell "0 | 3"
        - cell "Rejected"
        - cell "test":
          - paragraph: test
        - cell "R-00021499"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "[QA] Scenario 4":
          - paragraph: "[QA] Scenario 4"
        - cell "[QA] Scenario 4":
          - paragraph: "[QA] Scenario 4"
        - cell
      - row "IDR 0.00 0 | 4 Rejected test R-00021513 Joey Irvine Julianto 06 May 2025 Corporate Expense -":
        - cell
        - cell "IDR 0.00":
          - paragraph: IDR 0.00
        - cell "0 | 4"
        - cell "Rejected"
        - cell "test":
          - paragraph: test
        - cell "R-00021513"
        - cell "Joey Irvine Julianto 06 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 06 May 2025
        - cell "Corporate Expense":
          - paragraph: Corporate Expense
        - cell "-":
          - paragraph: "-"
        - cell
      - row "IDR 1,000.00 4 | 0 Verified - R-00021494 Joey Irvine Julianto 05 May 2025 Corporate Expense APPSET-22 -":
        - cell
        - cell "IDR 1,000.00":
          - paragraph: IDR 1,000.00
        - cell "4 | 0"
        - cell "Verified"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021494"
        - cell "Joey Irvine Julianto 05 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 05 May 2025
        - cell "Corporate Expense APPSET-22":
          - paragraph: Corporate Expense APPSET-22
        - cell "-":
          - paragraph: "-"
        - cell
      - row "IDR 300.00 2 | 0 Approved - R-00021487 Joey Irvine Julianto 04 May 2025 Corporate Expense APPSET-15 APPSET-15":
        - cell
        - cell "IDR 300.00":
          - paragraph: IDR 300.00
        - cell "2 | 0"
        - cell "Approved"
        - cell "-":
          - paragraph: "-"
        - cell "R-00021487"
        - cell "Joey Irvine Julianto 04 May 2025":
          - paragraph: Joey Irvine Julianto
          - paragraph: 04 May 2025
        - cell "Corporate Expense APPSET-15":
          - paragraph: Corporate Expense APPSET-15
        - cell "APPSET-15":
          - paragraph: APPSET-15
        - cell
  - table:
    - rowgroup:
      - row:
        - cell:
          - checkbox
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
        - cell
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
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
        - cell
  - table:
    - rowgroup:
      - row "Reject Verify History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Verify History":
          - button "Reject"
          - text: Verify
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Verify History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Verify History":
          - button "Reject"
          - text: Verify
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Verify History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Verify History":
          - button "Reject"
          - text: Verify
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Cancel History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Cancel History":
          - button "Reject"
          - button "Cancel"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Verify History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Verify History":
          - button "Reject"
          - text: Verify
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Verify History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Verify History":
          - button "Reject"
          - text: Verify
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Cancel History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Cancel History":
          - button "Reject"
          - button "Cancel"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Cancel History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Cancel History":
          - button "Reject"
          - button "Cancel"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Cancel History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Cancel History":
          - button "Reject"
          - button "Cancel"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Cancel History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Cancel History":
          - button "Reject"
          - button "Cancel"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "History":
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "History":
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Reject Cancel History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Reject Cancel History":
          - button "Reject"
          - button "Cancel"
          - button:
            - img
          - button "History":
            - img
            - text: History
      - row "Mark as Paid History":
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell
        - cell "Mark as Paid History":
          - button "Mark as Paid"
          - button:
            - img
          - button "History":
            - img
            - text: History
```

# Test source

```ts
  282 |         await this.vat.click();
  283 |         await this.vatPercentage.click();
  284 |         await this.vatDropdownValue(vatValue).click();
  285 |         await this.taxAmount.fill(taxRounding);
  286 |         await this.addItemButton.click();
  287 |     }
  288 |
  289 |
  290 |     async adminTab() {
  291 |         await this.adminButton.click();
  292 |         await this.page.waitForURL('https://hub4-dev.ycps.digital/reimbursement/admin');
  293 |         await expect(this.page).toHaveURL('https://hub4-dev.ycps.digital/reimbursement/admin');
  294 |     }
  295 |
  296 |     async addReimbursementItemProject(receiptNo, date, reimbursementdesc, category, division, amount, vatValueProject, taxRounding) {
  297 |         await this.addItem.click()
  298 |         await this.receiptNumber.fill(receiptNo)
  299 |         await this.reimbursementItemDate.click()
  300 |         await this.itemDatePicker(date).click()
  301 |         await this.reimbursementDesc.fill(reimbursementdesc)
  302 |         await this.reimbursementCategory.click()
  303 |         await this.itemCategoryDropdownValue(category).click()
  304 |         await this.reimbursementDivision.click()
  305 |         await this.itemDivisionDropdownValue(division).click()
  306 |         await this.reimbursementAmount.fill(amount)
  307 |         await this.rechargeToClient.click();
  308 |         await this.vat.click()
  309 |         await this.vatPercentageProject.click()
  310 |         await this.vatDropdownValueProject(vatValueProject).click()
  311 |         await this.taxAmount.fill(taxRounding)
  312 |         await this.addItemButton.click()
  313 |     }
  314 |
  315 |
  316 |     // For Japan Office
  317 |     async addReimbursementItemJapan(fileType, receiptNo, date, compName, reimbursementdesc, category, division, creditItem, amount, vatValue, taxRounding, participantFromClient, participantFromComp, filePath) {
  318 |         await this.addItem.click()
  319 |
  320 |         switch (fileType) {
  321 |             case 'JPG':
  322 |                 await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/image.jpg');
  323 |                 break;
  324 |             case 'PNG':
  325 |                 await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/test.png');
  326 |                 break;
  327 |             case 'PDF':
  328 |                 await this.reimbursementItemReceipt.setInputFiles('../../../fixtures/test.pdf');
  329 |                 break;
  330 |             default:
  331 |                 throw new Error('Unsupported file type');
  332 |         }
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
> 382 |         await this.itemReimbursement(reimbursementCode).click();
      |                                                         ^ Error: locator.click: Error: strict mode violation: getByRole('cell').locator('a') resolved to 75 elements:
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
  433 |         await this.poAdmin.click();
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