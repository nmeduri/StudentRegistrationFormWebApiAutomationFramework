import { test as baseTest } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { FormPage } from "../pages/FormPage";
import { StudentRegistrationFormPage } from "../pages/StudentRegistrationFormPage";

type pageFixtures = {
  basePage: BasePage;
  formPage: FormPage;
  stdRegForm: StudentRegistrationFormPage;
};

export let test = baseTest.extend<pageFixtures>({
  basePage: async ({ page }, use) => {
    let basePage = new BasePage(page);
    await use(basePage);
  },
  formPage: async ({ page }, use) => {
    let formPage = new FormPage(page);
    await use(formPage);
  },

  stdRegForm: async ({ page }, use) => {
    let stdRegForm = new StudentRegistrationFormPage(page);
    await use(stdRegForm);
  },
});

export { expect } from "@playwright/test";
