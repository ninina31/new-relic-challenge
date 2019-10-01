export default class Host {
  constructor(name) {
    this.name = name
    this.applications = []
  }

  addApplication(application) {
    this.applications.push(application)
  }

  removeApplication(application) {
    const appIndex = this.applications.indexOf(application)

    if (appIndex < 0) return

    this.applications.splice(appIndex, 1)
  }

  sortApplications() {
    this.applications.sort((a, b) => {
      return b.apdex - a.apdex
    })
  }

  getTopAppsByHost(howMany = 25) {
    return this.applications.slice(0, howMany)
  }
}