/**
  * Class representing a host
*/

export default class Host {
  constructor(name) {
    this.name = name
    this.applications = []
  }

  /**
  * @desc Adds application to the host
  * @param Object application - Application information
  * @return undefined
  */
  addApplication(application) {
    this.applications.push(application)
  }

  /**
  * @desc Removes application from the host
  * @param Object application - Application information
  * @return undefined
  */
  removeApplication(application) {
    const appIndex = this.applications.indexOf(application)

    if (appIndex < 0) return

    this.applications.splice(appIndex, 1)
  }

    /**
    * @desc Sorts hosts' applications from highest to lowest apdex
    * @return undefined
    */
  sortApplications() {
    this.applications.sort((a, b) => {
      return b.apdex - a.apdex
    })
  }

  /**
  * @desc Gets top applications for the current host
  * @param number howMany - Number of desired elements
  * @return [Object] - Array of applications with the desired length 
  */
  getTopAppsByHost(howMany = 25) {
    this.sortApplications()
    return this.applications.slice(0, howMany)
  }
}