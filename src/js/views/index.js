import hostTemplate from './host'
import appTemplate from './app'

/**
  * Library that handles main template to be rendered on the DOM
*/
export default {

  /**
  * @desc Produces template to be rendered
  * @param Hosts hosts - Hosts collection
  * @return string - template to be rendered
  */
  getTemplate: (hosts) => {
    const hostsTemplates = hostTemplate.getTemplate(hosts)
    return appTemplate.getTemplate(hostsTemplates)
  },
  
  /**
  * @desc Add event listeners to the code that we're rendering
  * @return undefined
  */
  addEventListeners: () => {
    appTemplate.addEventListeners()
    hostTemplate.addEventListeners()
  }
}