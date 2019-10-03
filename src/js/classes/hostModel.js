/**
  * Class representing a host
*/

export default class Host {
  constructor(name) {
    this.name = name
    this.applications = []
    this._isSorted = false
  }

  /**
  * @desc Adds application to the host
  * @param Object application - Application information
  * @return undefined
  */
  addApplication(application) {
    this.applications.push(application)
    this._isSorted = false
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
    this._isSorted = true
  }

  /**
  * @desc Gets top applications for the current host
  * @param number howMany - Number of desired elements
  * @return [Object] - Array of applications with the desired length 
  */
  getTopAppsByHost(howMany = 25) {
    // This flag is to avoid executing the sort function when it's
    // not necessary
    if (!this._isSorted) this.sortApplications()
    return this.applications.slice(0, howMany)
  }
}