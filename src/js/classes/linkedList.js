import Node from './node'

/**
  * Class representing a Linked List
*/

export default class LinkedList {
  constructor() {
    this.head = null
  }

  /**
  * @desc Adds element to the sorted list
  * @param Object data - application information
  * @return undefined
  */
  add(data) {
    const node = new Node(data)

    let pointer = this.head

    // If element has max apdex, attaches it on the beginning
    if(!pointer || node.data.apdex > this.head.data.apdex){
      node.next = this.head
      this.head = node
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
    let pointer = this.head
    
    // If the list is empty, does nothing
    if(!pointer){
      return
    }
    
    // If the list has one element and it's the one, assign null to head
    if(data.name === this.head.data.name){
      this.head = this.head.next
      return
    }
    
    // Searches for element
    while(pointer.next && pointer.next.data.name != data.name){
      pointer = pointer.next
    }
    
    if(pointer.next){
      pointer.next = pointer.next.next
    }
  }

  /**
  * @desc Returns sorted array with howMany elements
  * @param number howMany - number of desired elements
  * @return <Object> - Array with application information
  */
  slice(howMany) {
    let collection = []
    let pointer = this.head
    let counter = 0

    // If list is empty, returns emtpy array
    if(!pointer) return []
    
    // If list has one element, returns it
    if(!pointer.next) {
      collection.push(this.head.data)
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