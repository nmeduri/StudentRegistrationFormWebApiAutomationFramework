import { test, expect } from "../src/fixtures/pagefixtures";
import { CsvHelper } from "../src/utils/CsvHelper";

test.beforeEach(
  "Submit Student Registration Form",
  async ({ formPage, page }) => {
    console.log(" Welcome to Student Form Registration page");
    await formPage.goToSubmitForm();
  },
);

test("Validate Page Title Test", async ({ formPage, page }) => {
  let pageTitle = await formPage.titleName();
  console.log("Page Title:", pageTitle);
  expect(pageTitle).toBe("demosite");
});

// DD_1: read csv data directly from the CSV file and loop the test method row wise...
let testData = CsvHelper.readCSV("src/testdata/fillform.csv");
for (let row of testData) {
  test(`Fill Registration Form Test ${row.FirstName}-${row.LastName}-${row.Email}-${row.Mobile}-${row.Subjects}-${row.CurrentAddress}`, async ({
    formPage,
    stdRegForm,
  }) => {
    let header = await formPage.getHeader();
    console.log("Header:", header);
    expect(header).toBe("Student Registration Form");
    await stdRegForm.fillStudentRegistrationForm(
      row.FirstName,
      row.LastName,
      row.Email,
      row.Mobile,
      row.Subjects,
      row.CurrentAddress,
    );
    // FirstName,LastName,Email,Mobile,Subjects,CurrentAddress
    let headermessage = await stdRegForm.validateMessage();
    console.log("Header Message:", headermessage);
    expect(headermessage, "Thanks for submitting the form");
  });
}
