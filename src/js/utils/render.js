export default function (template, nodeID = 'root') {
  const node = document.getElementById(nodeID)
  if (!node) return
	node.innerHTML = template
}