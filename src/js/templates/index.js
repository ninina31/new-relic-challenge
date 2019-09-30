const getHostTemplate = (name, apps) => `
  <div class="host">
    <h2 class="host__title">${name}</h2>
    <ul class="host__apps-container">
      ${apps.map((app) => {
        return `<li class="host__apps-container__item">
          ${app.apdex}
          ${app.name}
        </li>`
      })}
    </ul>
  </div>
`;

const getAppTemplate = (hostsTemplates) => `
  <h1>Apps by Host <span>for user averylongemailaddress@companyname.com</span></h1>
  <div class="hosts">${hostsTemplates}</div>
`;

export default {
  getTemplate: (hosts) => {
    const hostsNames = Object.keys(hosts.getCollection());
    const hostsTemplates = hostsNames.map((name) => {
      const appsNames = hosts.getTopAppsByHost(name, 5);
      return getHostTemplate(name, appsNames);
    });
    return getAppTemplate(hostsTemplates.join(''));
  },
  addEventListeners: () => {

  }
}