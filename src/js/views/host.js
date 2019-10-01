const getAppTemplate = (app) => `
  <li class="host__apps-container__item" data-version="${app.version}">
    ${app.apdex}
    ${app.name}
  </li>
`

const template = (name, apps) => `
  <div class="host">
    <h2 class="host__title">${name}</h2>
    <ul class="host__apps-container">
      ${apps.map(getAppTemplate).join('')}
    </ul>
  </div>
`

const handleAppClickEvent = (event) => {
  alert(`Version: ${event.target.dataset.version}`)
}

export default {
  getTemplate: (hosts) => {
    const hostsNames = hosts.getHostsNames()
    const hostTemplate = hostsNames.map((name) => {
      const appsNames = hosts.getTopAppsByHost(name, 5)
      return template(name, appsNames)
    })
    return hostTemplate.join('')
  },
  
  addEventListeners: () => {
    const appElements = document.getElementsByClassName('host__apps-container__item')

    Array.prototype.forEach.call(appElements, (element) => {
      element.addEventListener('click', handleAppClickEvent)
    })
  }

}