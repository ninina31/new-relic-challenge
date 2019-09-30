export default class Hosts {
  constructor(applications) {
    this.collection = {};
    applications.forEach(this.addHosts.bind(this));
  }

  addHosts(application) {
    application.host.forEach((host) => {
      this.addOrderedAppToHost(host, application);
    });
  }
  
  addOrderedAppToHost(host, application) {
    // In case there is no application added yet
    this.collection[host] = this.collection[host] || [];
    // TODO: add ordered array
    this.collection[host].push(application);
  }

  getTopAppsByHost(host, howMany = 25) {
    return this.collection[host].slice(0, howMany);
  }

  getCollection() {
    return this.collection;
  }

  addAppToHosts(application) {
    //application.host.


  }
}