/**
  * Class representing a Linked List Node
*/

export default class Node {
  constructor(application, next = null) {
    this.data = application
    this.next = next
  }
}