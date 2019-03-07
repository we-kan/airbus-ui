import DataStore from "./dataStore";
import authStore from "./authStore";

export default class Store {

  constructor() {
    this.authStore = new authStore(this);
    this.dataStore = new DataStore(this);
  }
}
