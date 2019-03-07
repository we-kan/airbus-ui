import { observable } from 'mobx';

export default class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable user = { id: 2 };
}
