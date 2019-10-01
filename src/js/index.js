import Hosts from './classes/hostCollection'
import applications from './utils/mocks/host-app-data.json'
import views from './views'
import render from './utils/render'

import '../css/index.css'

(() => {
  const hosts = new Hosts(applications)
  const template = views.getTemplate(hosts)
  render(template)
  views.addEventListeners()
})()