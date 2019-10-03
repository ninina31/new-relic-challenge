import Host from './hostModel'

/**
  * Class representing a host collection
  * Applications are parsed and managed in this class
*/
export default class Hosts {
  constructor(applications) {
    this.collection = {}
    applications.forEach(this.parseHosts.bind(this))
  }

  /**
  * @desc Iterates thought all hosts in an application to manage them
  * @param Object application - application information
  * @return undefined
  */
  parseHosts(application) {
    application.host.forEach((host) => {
      this.addToHost(host, application)
    })
  }

  /**
  * @desc Adds new hosts or adds current applications to the existing host
  * @param string hostname - name of the host
  * @param Object application - application information
  * @return undefined
  */
  addToHost(hostname, application) {
    // In case there is no application added yet
    this.collection[hostname] = this.collection[hostname] || new Host(hostname)
    this.collection[hostname].addApplication(application)
  }

  /**
  * @desc Gets top applications for a specific host
  * @param string hostname - name of the host
  * @param number howManyy - how many items it is desired to return
  * @return [Object] - Top howManu applications sorted from highest to lowest apdex
  */
  getTopAppsByHost(hostname, howMany) {
    return this.collection[hostname].getTopAppsByHost(howMany)
  }

  /**
  * @desc Helper function to get list of host names
  * @return [string] - List of host names
  */
  getHostsNames() {
    return Object.keys(this.collection)
  }

  /**
  * @desc Adds an application to all hosts
  * @param Object application - application information
  * @return undefined
  */
 addAppToHosts(application) {
   this.getHostsNames().forEach((hostname) => {
     this.addToHost(hostname, application)
    })
  }
  
  /**
  * @desc Removes an application from all hosts
  * @param Object application - application information
  * @return undefined
  */
  removeAppFromHosts(application) {
    this.getHostsNames().forEach((hostname) => {
      let collection = this.collection[hostname]
      collection.removeApplication(application)
    })
  }
}