export class City {
  getCity(name) {
    console.log(`Fetch data for ${name}`);
    return `${name} info loaded`;
  }
}

export default class ProxyCity {
  constructor() {
    this.city = new City();
    this.cache = {};
  }

  getCity(name) {
    if (!this.cache[name]) {
      this.cache[name] = this.city.getCity(name);
    } else {
      console.log(`Getting ${name} from cache`);
    }
    console.log(this.cache[name]);
    return this.cache[name];
  }
}
