import { makeAutoObservable } from "mobx";

class AuthStore {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  registretion = (user) => {
    this.users.push(user);
  };
}

export default new AuthStore();
