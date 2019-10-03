/**
* @desc Renders information to the DOM
* @param string template - template to be rendered
* @param string nodeID - node ID where the template is desired
* @return undefined
*/
export default (template, nodeID = 'root') => {
  const node = document.getElementById(nodeID)
  if (!node) return
	node.innerHTML = template
}