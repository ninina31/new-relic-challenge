import render from '../utils/render'

const CHECKBOX_LIST_LABEL = 'Show as list'
const CHECKBOX_GRID_LABEL = 'Show as awesome grid'
const HOST_LIST_CLASSNAME = 'host--list'

const template = (hostsTemplates) => `
  <div class="hosts">
    <h1>Apps by Host <span>for user averylongemailaddress@companyname.com</span></h1>
    <div id="toggle" class="hosts__toggle">
      <span><input type="checkbox" id="hosts__checkbox"></span><span id="hosts__checkbox__label">${CHECKBOX_LIST_LABEL}</span>
    </div>
    ${hostsTemplates}
  </div>
`

const handleHostClassToggle = (element) => {
  element.classList.toggle(HOST_LIST_CLASSNAME)
}

const handleCheckboxLabelToggle = (element) => {
  const isList = element.classList.contains(HOST_LIST_CLASSNAME)
  const label = isList ? CHECKBOX_GRID_LABEL : CHECKBOX_LIST_LABEL
  render(label, 'hosts__checkbox__label')
}

const handleToggleClickEvent = () => {
  const hostElements = document.getElementsByClassName('host')

  Array.prototype.forEach.call(hostElements, (element) => {
    handleHostClassToggle(element)
    handleCheckboxLabelToggle(element)
  })
}

export default {
  getTemplate: template,
  
  addEventListeners: () => {
    document.getElementById('toggle').addEventListener('click', handleToggleClickEvent)
  }
}