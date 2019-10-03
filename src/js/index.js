import Hosts from './classes/hostCollection'
//import applications from './utils/mocks/host-app-data.json'
import views from './views'
import render from './utils/render'
import request from './utils/request'

import '../css/index.css'

const updateDOM = (hosts) => {
  // Get main template with loaded information
  const template = views.getTemplate(hosts)

  // Render main page to the DOM
  render(template)

  // Adds event listeners to the page
  views.addEventListeners()
}

(() => {

  const renderIndex = (applications) => {

    // Create Host Collection (here the applications are parsed and loaded to the collection)
    const hosts = new Hosts(applications)

    // Updates DOM
    updateDOM(hosts)

    // To test adding a new application, uncomment next code, when you do,
    // you'll see the app Test Andreina on each host :)

    /*const application = {
      name: 'Test Andreina',
      apdex: 100,
      version: 9
    }

    hosts.addAppToHosts(application)

    updateDOM(hosts)*/

    // To test removing an old application, uncomment next code. We you do, you
    // no longer see the Awesome Wooden Sausages - Schaefer - Hegmann, Inc application
    // on any host :)

    /*const application = hosts.getTopAppsByHost('7e6272f7-098e.dakota.biz')[0]

    hosts.removeAppFromHosts(application)

    updateDOM(hosts)*/
  }

  // Simulate request
  request('./host-app-data.json', renderIndex)
  
})()