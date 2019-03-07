import DataStore from "./dataStore";
import AuthStore from "./authStore";

export default class Store {

  constructor() {
    this.authStore = new AuthStore(this);
    this.dataStore = new DataStore(this);
  }
}
