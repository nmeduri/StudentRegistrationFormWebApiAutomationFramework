import { test, expect } from "../src/fixtures/pagefixtures";

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

test("Fill Registration Form Test", async ({ formPage, stdRegForm }) => {
  let header = await formPage.getHeader();
  console.log("Header:", header);
  expect(header).toBe("Student Registration Form");
  await stdRegForm.fillStudentRegistrationForm(
    "Tester",
    "QA",
    "abc@example.com",
    "1234567892",
    "abctest",
    "AndhraPradesh",
  );
  let headermessage = await stdRegForm.validateMessage();
  console.log("Header Message:", headermessage);
  expect(headermessage, "Thanks for submitting the form");
});
