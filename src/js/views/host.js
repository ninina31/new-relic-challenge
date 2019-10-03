/**
  * Library that handles hosts templates to be rendered on the DOM
*/

/**
* @desc Produces application list template to be rendered
* @param Object app - Application information
* @return string - template to be rendered
*/
const getAppTemplate = (app) => `
  <li class="host__apps-container__item" data-version="${app.version}" data-apdex="${app.apdex}">
    ${app.name}
  </li>
`
/**
* @desc Produces host list item template to be rendered
* @param string name - Host name
* @param [Object] apps - Application list information
* @return string - template to be rendered
*/
const template = (name, apps) => `
  <div class="host">
    <h2 class="host__title">${name}</h2>
    <ul class="host__apps-container">
      ${apps.map(getAppTemplate).join('')}
    </ul>
  </div>
`
/**
  * @desc Executes functions to handle click on application - executes alert
  * @param MouseEvent event - event triggered by click action
  * @return undefined
*/
const handleAppClickEvent = (event) => {
  alert(`Version: ${event.target.dataset.version}`)
}

export default {
  /**
  * @desc Produces template to be rendered
  * @param Hosts hosts - Hosts collection class instance
  * @return string - template to be rendered
  */
  getTemplate: (hosts) => {
    const hostsNames = hosts.getHostsNames()
    const hostTemplate = hostsNames.map((name) => {
      const appsNames = hosts.getTopAppsByHost(name, 5)
      return template(name, appsNames)
    })
    return hostTemplate.join('')
  },
  
  /**
  * @desc Add event listeners to the code that we're rendering
  * @return undefined
  */
  addEventListeners: () => {
    const appElements = document.getElementsByClassName('host__apps-container__item')

    Array.prototype.forEach.call(appElements, (element) => {
      element.addEventListener('click', handleAppClickEvent)
    })
  }

}