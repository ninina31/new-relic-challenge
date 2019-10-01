import Host from './hostModel'

export default class Hosts {
  constructor(applications) {
    this.collection = {}
    applications.forEach(this.parseHosts.bind(this))
    this.sortAllApplications()
  }

  parseHosts(application) {
    application.host.forEach((host) => {
      this.addToHost(host, application)
    })
  }
  
  addToHost(hostname, application) {
    // In case there is no application added yet
    this.collection[hostname] = this.collection[hostname] || new Host(hostname)
    this.collection[hostname].addApplication(application)
  }

  getTopAppsByHost(hostname, howMany) {
    return this.collection[hostname].getTopAppsByHost(howMany)
  }

  getCollection() {
    return { ...this.collection }
  }

  getHostsNames() {
    return Object.keys(this.collection)
  }

  addAppToHosts(application) {
    this.getHostsNames().forEach((hostname) => {
      this.addToHost(hostname, application)
      this.collection[hostname].sortApplications()
    })
  }

  removeAppFromHosts(application) {
    this.getHostsNames().forEach((hostname) => {
      let collection = this.collection[hostname]
      collection.removeApplication(hostname, application)
      collection.sortApplications()
    })
  }

  sortAllApplications() {
    this.getHostsNames().forEach((hostname) => {
      this.collection[hostname].sortApplications()
    })
  }
}