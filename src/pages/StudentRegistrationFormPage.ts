import { BasePage } from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class StudentRegistrationFormPage extends BasePage {
  // locators + actions

  // 1. private Locators
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly gender: Locator;
  private readonly mobile: Locator;
  private readonly dateOfBirthInput: Locator;
  private readonly day: Locator;
  private readonly month: Locator;
  private readonly year: Locator;
  private readonly dob: Locator;
  private readonly subjects: Locator;
  private readonly hobbies: Locator;
  private readonly currentAddress: Locator;
  private readonly selectstate: Locator;
  private readonly submitBtn: Locator;
  private readonly selectcity: Locator;
  private readonly message: Locator;
  private readonly close: Locator;

  // 2. Initializing the Locators

  constructor(page: Page) {
    super(page);
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.email = page.getByRole("textbox", { name: "name@example.com" });
    this.gender = page.getByRole("radio", { name: "Male" }).first();
    this.mobile = page.getByRole("textbox", { name: "Mobile Number" });
    this.dateOfBirthInput = page.locator("#dateOfBirthInput");
    this.day = page.locator(
      ".react-datepicker__day:not(.react-datepicker__day--outside-month)",
    );
    this.month = page.locator(".react-datepicker__month-select");
    this.year = page.locator(".react-datepicker__year-select");
    this.dob = page.locator("input#dateOfBirthInput");
    this.subjects = page.locator("input#subjectsInput");
    this.hobbies = page.getByRole("checkbox", { name: "Sports" });
    this.currentAddress = page.getByRole("textbox", {
      name: "Current Address",
    });
    this.selectstate = page.locator("#react-select-3-input");
    this.selectcity = page.locator("#react-select-4-input");
    this.submitBtn = page.getByRole("button", { name: "Submit", exact: true });
    this.message = page.getByText("Thanks for submitting the form");
    this.close = page.getByRole("button", { name: "Close", exact: true });
  }

  // 3. Actions

  /**
   * Fill all mandatory fields
   */
  async fillStudentRegistrationForm(
    fName: string,
    lName: string,
    eMail: string,
    mobile: string,
    dob: string,
    subject: string,
    currAddress: string,
    state: string,
    city: string,
  ): Promise<void> {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.email.fill(eMail);
    await this.gender.click();
    await this.mobile.fill(mobile);
    await this.selectDateOfBirth(dob);
    await this.subjects.fill(subject);
    await this.hobbies.click();
    await this.currentAddress.fill(currAddress);
    await this.selectState(state);
    await this.selectCity(city);
    await this.clickClose();
  }
  /**
   *
   * @param dob Provide Date Of Birth
   */
  private async selectDateOfBirth(dob: string) {
    const [day, month, year] = dob.split(",").map(Number);
    await this.dateOfBirthInput.click();
    await this.month.selectOption((month - 1).toString());
    await this.year.selectOption(year.toString());
    await this.day.getByText(day.toString(), { exact: true }).click();
  }

  /**
   *
   * @param stateName provide stateName
   */
  private async selectState(stateName: string): Promise<void> {
    await this.selectstate.click();
    await this.page
      .getByRole("option", { name: stateName, exact: true })
      .click();
  }
  /**
   *
   * @param stateCity provide City
   */

  private async selectCity(stateCity: string): Promise<void> {
    await this.selectcity.click();
    await this.page
      .getByRole("option", { name: stateCity, exact: true })
      .click();
    await this.submitBtn.click();
  }

  /**
   *
   * @returns Header Message
   */
  async validateMessage(): Promise<string | null> {
    return await this.message.textContent();
  }
  /**
   * click on close button
   */
  private async clickClose(): Promise<void> {
    await this.close.click();
  }
}
