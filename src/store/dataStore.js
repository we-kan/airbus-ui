import { observable } from 'mobx';

export default class DataStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable user = { id: 2 };
}
