import { observable, action } from 'mobx';
import API from '../api';


export default class DataStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable aircrafts = [];
  @observable aircraft_info = undefined;
  @observable
   pageLoading = false;

  @action async getAircrafts() {
    this.pageLoading = true;
    const res = await API.get('/aircraft/aircraft/');
    this.aircrafts = res.data;
    this.pageLoading = false;
  }

  @action async getAircraftInfo(id) {
    this.pageLoading = true;
    const res = await API.get('/aircraft/aircraft_info/'+id+'/');
    this.aircraft_info = res.data;
    console.log(this.aircrafts);
    this.pageLoading = false;
  }
}
