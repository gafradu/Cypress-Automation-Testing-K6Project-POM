class GeneralMethods {
  generateUsername(firstName, lastName) {
    return firstName.toLowerCase().slice(0, 1) + lastName.toLowerCase();
  }
  generateEmailAddress(userName) {
    return userName + "@gmail.com";
  }
}
export default new GeneralMethods();
