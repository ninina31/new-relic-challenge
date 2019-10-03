import HostModel from './hostModel'
import HostCollection from './hostCollection'

describe('#HostCollection', () => {
  let hostCollection

  const applications = [
    {
      name: 'application1',
      version: 5,
      apdex: 90,
      host: [ 'name1' ]
    },
    {
      name: 'application2',
      version: 4,
      apdex: 100,
      host: [ 'name2' ]
    },
    {
      name: 'application3',
      version: 9,
      apdex: 80,
      host: [ 'name3' ]
    }
  ]
  
  beforeEach(() => {
    hostCollection = new HostCollection(applications)
  })
  
  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('#constructor', () => {
    it('collection has 3 hosts', () => {
      expect(Object.keys(hostCollection.collection).length).toBe(3)
    })

    it('elements are HostModel elements', () => {
      expect(hostCollection.collection['name1']).toBeInstanceOf(HostModel)
    })
  })

  describe('#parseHosts', () => {
    const application = {
      name: 'application',
      version: 5,
      apdex: 90,
      host: [ 'name1', 'name2' ]
    }

    beforeEach(() => {
      jest.spyOn(hostCollection, 'addToHost').mockImplementation()
      hostCollection.parseHosts(application)
    })

    it('calls to add to host for each host', () => {
      expect(hostCollection.addToHost).toHaveBeenCalledTimes(2)
    })
  })

  describe('#addToHost', () => {
    let application = {
      name: 'application',
      version: 5,
      apdex: 90,
      host: [ 'name1', 'name2' ]
    }
    
    describe('when host doesnt exist in the collection', () => {
      const hostName = 'name4'

      beforeEach(() => {
        jest.spyOn(HostModel.prototype, 'addApplication').mockImplementation()
        hostCollection.addToHost(hostName, application)
      })
      
      it('creates new HostModel', () => {
        const model = hostCollection.collection[hostName]
        expect(model.applications.head).toBeNull()
      })
      
      it('calls to add application', () => {
        expect(HostModel.prototype.addApplication).toHaveBeenCalledWith(application)
      })
    })

    describe('when host exists in the collection', () => {
      const hostName = 'name1'

      beforeEach(() => {
        jest.spyOn(hostCollection.collection[hostName], 'addApplication').mockImplementation()
        hostCollection.addToHost(hostName, application)
      })
      
      it('uses previosly created model', () => {
        const model = hostCollection.collection[hostName]
        expect(model.applications.head).not.toBeNull()
      })
      
      it('calls to add application', () => {
        expect(hostCollection.collection[hostName].addApplication).toHaveBeenCalledWith(application)
      })
    })
  })

  describe('#getTopAppsByHost', () => {
    const hostName = 'name1'
    const howMany = 1
    let result

    beforeEach(() => {
      jest.spyOn(hostCollection.collection[hostName], 'getTopAppsByHost')
      result = hostCollection.getTopAppsByHost(hostName, howMany)
    })

    it('calls to get top hosts', () => {
      expect(hostCollection.collection[hostName].getTopAppsByHost).toHaveBeenCalledWith(howMany)
    })
    
    it('returns correct apps', () => {
      expect(result).toStrictEqual([applications[0]])
    })
  })

  describe('#getHostsNames', () => {
    const expectedResult = [
      applications[0].host[0],
      applications[1].host[0],
      applications[2].host[0]
    ]
    let result

    beforeEach(() => {
      result = hostCollection.getHostsNames()
    })

    it('expects to return correct keys', () => {
      expect(result).toStrictEqual(expectedResult)
    })
  })

  describe('#addAppToHosts', () => {
    let application = {
      name: 'application',
      version: 5,
      apdex: 90,
      host: [ 'name1', 'name2' ]
    }
    let times

    beforeEach(() => {
      times = hostCollection.getHostsNames().length
      jest.spyOn(hostCollection, 'addToHost').mockImplementation()
      hostCollection.addAppToHosts(application)
    })

    it('calls to add to collection', () => {
      expect(hostCollection.addToHost).toHaveBeenCalledTimes(times)
    })
  })
 
  describe('#removeAppFromHosts', () => {
    let application = {
      name: 'application',
      version: 5,
      apdex: 90,
      host: [ 'name1', 'name2' ]
    }
    let times

    beforeEach(() => {
      times = hostCollection.getHostsNames().length
      jest.spyOn(HostModel.prototype, 'removeApplication').mockImplementation()
      hostCollection.removeAppFromHosts(application)
    })

    it('calls to add to collection', () => {
      expect(HostModel.prototype.removeApplication).toHaveBeenCalledTimes(times)
    })
  })
})