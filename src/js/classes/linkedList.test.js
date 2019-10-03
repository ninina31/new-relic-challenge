import LinkedList from './linkedList'

describe('#LinkedList', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  }) 

  describe('constructor', () => {
    it('initialised with null next', () => {
      expect(linkedList.next).toBeNull()
    })
  })
  
  describe('add', () => {
    const application1 = {
      name: 'application1',
      version: 5,
      apdex: 90
    }
    const application2 = {
      name: 'application2',
      version: 4,
      apdex: 100
    }
    const application3 = {
      name: 'application3',
      version: 9,
      apdex: 80
    }

    describe('when there are no elements in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
      })

      it('is first and last element', () => {
        expect(linkedList.next.data).toBe(application1)
        expect(linkedList.next.next).toBeNull()
      })
    })
    
    describe('when there is one element in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
        linkedList.add(application2)
      })

      it('first element is in the right place', () => {
        expect(linkedList.next.data).toBe(application2)
      })

      it('next element is in the right place', () => {
        expect(linkedList.next.next.data).toBe(application1)
      })
    })

    describe('when there is more than one element in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
        linkedList.add(application2)
        linkedList.add(application3)
      })

      it('first element is sorted', () => {
        expect(linkedList.next.data).toBe(application2)
      })

      it('next element is in the right place', () => {
        expect(linkedList.next.next.data).toBe(application1)
      })

      it('last element is in the right place', () => {
        expect(linkedList.next.next.next.data).toBe(application3)
      })
    })
  })
  describe('remove', () => {
    const application1 = {
      name: 'application1',
      version: 5,
      apdex: 90
    }
    const application2 = {
      name: 'application2',
      version: 4,
      apdex: 100
    }
    const application3 = {
      name: 'application3',
      version: 9,
      apdex: 80
    }

    describe('when there are no elements in the list', () => {
      beforeEach(() => {
        linkedList.remove(application1)
      })

      it('does nothing', () => {
        expect(linkedList.next).toBeNull()
      })
    })
    
    describe('when there is one element in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
        linkedList.remove(application1)
      })

      it('empties list', () => {
        expect(linkedList.next).toBeNull()
      })
    })

    describe('when there is more than one element in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
        linkedList.add(application2)
        linkedList.add(application3)
        linkedList.remove(application1)
      })

      it('first element is sorted', () => {
        expect(linkedList.next.data).toBe(application2)
      })

      it('next element is in the right place', () => {
        expect(linkedList.next.next.data).toBe(application3)
      })
    })
    
    describe('when the desired element is the last one', () => {
      beforeEach(() => {
        linkedList.add(application1)
        linkedList.add(application2)
        linkedList.add(application3)
        linkedList.remove(application3)
      })

      it('first element is sorted', () => {
        expect(linkedList.next.data).toBe(application2)
      })

      it('next element is in the right place', () => {
        expect(linkedList.next.next.data).toBe(application1)
      })

      it('last element doesnt exist', () => {
        expect(linkedList.next.next.next).toBeNull()
      })
    })
  })

  describe('slice', () => {
    const application1 = {
      name: 'application1',
      version: 5,
      apdex: 90
    }
    const application2 = {
      name: 'application2',
      version: 4,
      apdex: 100
    }
    const application3 = {
      name: 'application3',
      version: 9,
      apdex: 80
    }

    let result
    let howMany = 2

    describe('when there are no elements in the list', () => {
      beforeEach(() => {
        result = linkedList.slice(howMany)
      })

      it('returns empty array', () => {
        expect(result.length).toBe(0)
      })
    })
    
    describe('when there is one element in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
        result = linkedList.slice(howMany)
      })

      it('returns array with only element', () => {
        expect(result[0]).toBe(application1)
      })
    })

    describe('when there is more than one element in the list', () => {
      beforeEach(() => {
        linkedList.add(application1)
        linkedList.add(application2)
        linkedList.add(application3)
        result = linkedList.slice(howMany)
      })

      it('return list with same length as howMany', () => {
        expect(result.length).toBe(howMany)
      })

      it('elements are sorted', () => {
        expect(result[0].apdex).toBeGreaterThan(result[1].apdex)
      })
    })
  })
})