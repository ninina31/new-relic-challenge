import LinkedList from './linkedList'

/**
  * Class representing a host
*/

export default class Host {
  constructor(name) {
    this.name = name
    this.applications = new LinkedList()
  }

  /**
  * @desc Adds application to the host
  * @param Object application - Application information
  * @return undefined
  */
  addApplication(application) {
    this.applications.add(application)
  }

  /**
  * @desc Removes application from the host
  * @param Object application - Application information
  * @return undefined
  */
  removeApplication(application) { 
    this.applications.remove(application)
  }

  /**
  * @desc Gets top applications for the current host
  * @param number howMany - Number of desired elements
  * @return [Object] - Array of applications with the desired length 
  */
  getTopAppsByHost(howMany) {
    return this.applications.slice(howMany)
  }
}