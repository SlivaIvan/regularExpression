export default class Validator {
  constructor(login) {
    this.login = login;
  }

  validateUsername() {
    return /^[a-zA-Z]+[-_]?\d{0,3}[-_]?[a-zA-Z]+[^\d_-]$/g.test(this.login);
  }
}
