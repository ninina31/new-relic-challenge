import Hosts from './classes/hosts';
import applications from './utils/mocks/host-app-data.json';
import render from './templates';

import '../css/index.css';

(() => {
  const hosts = new Hosts(applications);
  document.getElementById('root').innerHTML = render.getTemplate(hosts);
  
})();