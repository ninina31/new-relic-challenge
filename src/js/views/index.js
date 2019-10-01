import hostTemplate from './host'
import appTemplate from './app'

export default {
  getTemplate: (hosts) => {
    const hostsTemplates = hostTemplate.getTemplate(hosts)
    return appTemplate.getTemplate(hostsTemplates)
  },
  
  addEventListeners: () => {
    appTemplate.addEventListeners()
    hostTemplate.addEventListeners()
  }
}