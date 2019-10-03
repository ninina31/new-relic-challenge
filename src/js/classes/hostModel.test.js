import Host from './hostModel'
import LinkedList from './linkedList'

describe('#HostModel', () => {
  let hostModel
  const hostName = 'host.name.example'

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

  beforeEach(() => {
    hostModel = new Host(hostName)
  })

  describe('#constructor', () => {
    it('sets instance name', () => {
      expect(hostModel.name).toBe(hostName)
    })
    it('initialize empty linked list for applications collection', () => {
      expect(hostModel.applications.head).toBeNull()
    })
  })

  describe('#addApplication', () => {
    const application = {
      name: 'application',
      version: 5,
      apdex: 100
    }

    beforeEach(() => {
      jest.spyOn(hostModel.applications, 'add').mockImplementation()
      hostModel.addApplication(application)
    })

    it('adds application to the applications list', () => {
      expect(hostModel.applications.add).toHaveBeenCalledWith(application)
    })
  })
  
  describe('#removeApplication', () => {
    beforeEach(() => {
      jest.spyOn(hostModel.applications, 'remove').mockImplementation()
      hostModel.removeApplication(application1)
    })

    it('removes linked list element', () => {
      expect(hostModel.applications.remove).toHaveBeenCalledWith(application1)
    })
  })

  describe('#getTopAppsByHost', () => {
    const howMany = 2
    const expectedResult = [ application1 ]
    let result
    
    beforeEach(() => {
      jest.spyOn(hostModel.applications, 'slice').mockImplementation(() => expectedResult)
      result = hostModel.getTopAppsByHost(howMany)
    })
    
    it('calls to slice linked list', () => {
      expect(hostModel.applications.slice).toHaveBeenCalledWith(howMany)
    })
    
    it('returns correct list of elements', () => {
      expect(result).toBe(expectedResult)
    })
  })
})
