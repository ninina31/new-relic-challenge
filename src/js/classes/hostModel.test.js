import Host from './hostModel'

describe('#HostModel', () => {
  let hostModel
  const hostName = 'host.name.example'

  beforeEach(() => {
    hostModel = new Host(hostName)
  })

  describe('#constructor', () => {
    it('sets instance name', () => {
      expect(hostModel.name).toBe(hostName)
    })
    it('initialize empty array for applications collection', () => {
      expect(hostModel.applications.length).toBe(0)
    })
    it('sorted attribute is initialised with false', () => {
      expect(hostModel._isSorted).toBe(false)
    })
  })

  describe('#addApplication', () => {
    const application = {
      name: 'application',
      version: 5,
      apdex: 100
    }

    beforeEach(() => {
      hostModel.addApplication(application)
    })

    it('adds application to the applications collection', () => {
      expect(hostModel.applications.indexOf(application)).toBeGreaterThan(-1)
    })

    it('sorted flag is false', () => {
      expect(hostModel._isSorted).toBe(false)
    })
  })
  
  describe('#removeApplication', () => {
    describe('when application is not on the applications collection', () => {
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
      beforeEach(() => {
        hostModel.addApplication(application1)
        hostModel.removeApplication(application2)
      })
      it('does nothing', () => {
        expect(hostModel.applications.length).toBe(1)
      })
    })
    describe('when application is not on the applications collection', () => {
      const application = {
        name: 'application',
        version: 5,
        apdex: 100
      }
      beforeEach(() => {
        hostModel.addApplication(application)
        hostModel.removeApplication(application)
      })
  
      it('removes application to the applications collection', () => {
        expect(hostModel.applications.length).toBe(0)
        expect(hostModel.applications.indexOf(application)).toBe(-1)
      })
    })
  })

  describe('#sortApplications', () => {
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

    beforeEach(() => {
      hostModel.addApplication(application1)
      hostModel.addApplication(application2)
      hostModel.sortApplications()
    })

    it('sorts applications on the applications collection', () => {
      expect(hostModel.applications[0]).toBe(application2)
    })
    
    it('sorted attribute is true', () => {
      expect(hostModel._isSorted).toBe(true)
    })
  })

  describe('#getTopAppsByHost', () => {
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

    describe('when sorted attribute is true', () => {
      beforeEach(() => {
        hostModel.addApplication(application1)
        hostModel.addApplication(application2)
        hostModel.addApplication(application3)
        jest.spyOn(hostModel, 'sortApplications')
        hostModel._isSorted = true
        result = hostModel.getTopAppsByHost(2)
      })
      
      it('doesnt sort elements', () => {
        expect(hostModel.sortApplications).not.toHaveBeenCalled()
      })
      
      it('returns correct number of elements', () => {
        expect(result.length).toBe(2)
      })
    })
    describe('when sorted attribute is false', () => {
      beforeEach(() => {
        hostModel.addApplication(application1)
        hostModel.addApplication(application2)
        hostModel.addApplication(application3)
        jest.spyOn(hostModel, 'sortApplications')
        result = hostModel.getTopAppsByHost(2)
      })
      
      it('sorts elements', () => {
        expect(hostModel.sortApplications).toHaveBeenCalled()
      })
    
      it('returns correct number of elements', () => {
        expect(result.length).toBe(2)
      })
      
      it('returns correct elements', () => {
        expect(result[0]).toBe(application2)
        expect(result[1]).toBe(application1)
      })
    })
  })
})
