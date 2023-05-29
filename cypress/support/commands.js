import { faker } from "@faker-js/faker";
import MainPage from "../pages/MainPage";
import MyAccountPage from "../pages/MyAccountPage";
import GeneralMethods from "../pages/GeneralMethods";
import CheckoutPage from "../pages/CheckoutPage";

Cypress.Commands.add("registerNewUser", (randomFirstName, randomLastName) => {
  let username = GeneralMethods.generateUsername(
    randomFirstName,
    randomLastName
  );
  let emailAddress = GeneralMethods.generateEmailAddress(username);

  MainPage.getMyAccountPage().click();
  MyAccountPage.getRegisterEmail().type(emailAddress);
  MyAccountPage.getRegisterButton().click();
});

Cypress.Commands.add("completeCheckoutInformation", () => {
  const randomFirstName = faker.person.firstName();
  CheckoutPage.getFirstName().type(randomFirstName);

  const randomLastName = faker.person.lastName();
  CheckoutPage.getLastName().type(randomLastName);

  const randomCompany = faker.company.name();
  CheckoutPage.getCompany().type(randomCompany);

  const Country = "Romania";
  CheckoutPage.getCountry().select(Country, { force: true });

  const randomStreetAddress1 = faker.location.streetAddress(false);
  CheckoutPage.getStreetAddress1().type(randomStreetAddress1);

  const randomStreetAddress2 = faker.location.secondaryAddress();
  CheckoutPage.getStreetAddress2().type(randomStreetAddress2);

  const randomCity = faker.location.city();
  CheckoutPage.getCity().type(randomCity);

  const County = "Vrancea";
  CheckoutPage.getCounty().select(County, { force: true });

  const randomZipCode = faker.location.zipCode();
  CheckoutPage.getZipCode().type(randomZipCode);

  const randomPhoneNumber = faker.phone.number("+40 77 ### ## ##");
  CheckoutPage.getPhone().type(randomPhoneNumber);

  const username = GeneralMethods.generateUsername(
    randomFirstName,
    randomLastName
  );
  const emailAddress = GeneralMethods.generateEmailAddress(username);
  CheckoutPage.getEmail().type(emailAddress);

  CheckoutPage.getCreateAccountCheckbox().click();

  const randomAdditionalInformation = faker.lorem.sentence(30);
  CheckoutPage.getAdditionalInformationField().type(
    randomAdditionalInformation
  );
});

Cypress.Commands.add("interceptAPI", (methodTypeAPI, urlAPI, aliasApi) => {
cy.intercept({
  method: `${methodTypeAPI}`,
  url: `${urlAPI}`,
}).as(`${aliasApi}`);
});