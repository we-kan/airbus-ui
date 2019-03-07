import { decorate, observable } from 'mobx';

export default class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  user = { id: 2 };
}

decorate(AuthStore, { user: observable });
