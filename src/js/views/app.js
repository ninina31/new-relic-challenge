import render from '../utils/render'

const CHECKBOX_LIST_LABEL = 'Show as list'
const CHECKBOX_GRID_LABEL = 'Show as awesome grid'
const HOST_LIST_CLASSNAME = 'host--list'
const HOST_LIST_CONTAINER_CLASSNAME = 'hosts__container--list'

/**
  * Library that handles template to be rendered on the DOM
*/

/**
* @desc Produces template to be rendered
* @param string hostsTemplates - Hosts collection on their rendered form
* @return string - template to be rendered
*/
const template = (hostsTemplates) => `
  <div class="hosts">
    <div class="hosts__header">
      <h1 class="hosts__header__title">Apps by Host <span class="hosts__header__email">for user averylongemailaddress@companyname.com</span></h1>
      <div id="toggle" class="hosts__header__toggle">
        <input type="checkbox" id="hosts__checkbox" name="" />
        <label for="hosts__checkbox" id="hosts__checkbox__check"></label>
      </div>
      <span id="hosts__checkbox__label">${CHECKBOX_LIST_LABEL}</span>
    </div>
    <div class="hosts__container">
      ${hostsTemplates}
    </div>
  </div>
`
/**
  * @desc Toggles class to HTML element
  * @param HTMLElement element - the target element to toggle class
  * @return undefined
*/
const handleHostClassToggle = (element) => {
  element.classList.toggle(HOST_LIST_CLASSNAME)
}

/**
  * @desc Changes label for checkbox according value
  * @param HTMLElement element - the target element to check value
  * @return undefined
*/
const handleCheckboxLabelToggle = (element) => {
  const isList = element.classList.contains(HOST_LIST_CLASSNAME)
  const label = isList ? CHECKBOX_GRID_LABEL : CHECKBOX_LIST_LABEL
  render(label, 'hosts__checkbox__label')
}

/**
  * @desc Executes functions to handle toggle event for checkbox
  * @param no params
  * @return undefined
*/
const handleToggleClickEvent = () => {
  const hostElements = document.getElementsByClassName('host')
  const hostContainerElement = document.getElementsByClassName('hosts__container')[0]

  hostContainerElement.classList.toggle(HOST_LIST_CONTAINER_CLASSNAME)

  Array.prototype.forEach.call(hostElements, (element) => {
    handleHostClassToggle(element)
    handleCheckboxLabelToggle(element)
  })
}

export default {
  getTemplate: template,
  
  /**
  * @desc Add event listeners to the code that we're rendering
  * @param no params
  * @return undefined
  */
  addEventListeners: () => {
    document.getElementById('hosts__checkbox__check').addEventListener('click', handleToggleClickEvent)
  }
}