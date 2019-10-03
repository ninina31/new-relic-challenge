import Node from './node'

/**
  * Class representing a Linked List
*/

export default class LinkedList {
  constructor() {
    this.next = null
  }

  /**
  * @desc Adds element to the sorted list
  * @param Object data - application information
  * @return undefined
  */
  add(data) {
    const node = new Node(data)

    let pointer = this.next

    // If element has max apdex, attaches it on the beginning
    if(!pointer || node.data.apdex > this.next.data.apdex){
      node.next = this.next
      this.next = node
      return
    }
    
    // Searches for the position
    while(pointer.next && pointer.next.data.apdex > node.data.apdex) {
      pointer = pointer.next
    }

    // Attaches element to right position
    node.next = pointer.next
    pointer.next = node

  }

  /**
  * @desc Removes element to the sorted list
  * @param Object data - application information
  * @return undefined
  */
  remove(data) {
    this.next = this._recursiveDelete(this.next, data.name)
  }

  _recursiveDelete(node, name){

    // Base case
    if(!node){
      return null
    }

    // If it finds the element, returns the next element
    if(node.data.name === name) {
      return node.next
    }

    // Assigns recursive value to next node
    node.next = this._recursiveDelete(node.next, name)

    return node
  }

  /**
  * @desc Returns sorted array with howMany elements
  * @param number howMany - number of desired elements
  * @return <Object> - Array with application information
  */
  slice(howMany) {
    let collection = []
    let pointer = this.next
    let counter = 0

    // If list is empty, returns emtpy array
    if(!pointer) return []
    
    // If list has one element, returns it
    if(!pointer.next) {
      collection.push(this.next.data)
      return collection
    }
    
    // Populates array with howMany elements
    while(pointer.next && counter < howMany) {
      collection.push(pointer.data)
      pointer = pointer.next
      counter++
    }

    return collection
  }
}