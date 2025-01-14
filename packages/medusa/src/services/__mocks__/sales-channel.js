export const SalesChannelServiceMock = {
  withTransaction: function () {
    return this
  },

  retrieve: jest.fn().mockImplementation((id, config) => {
    return Promise.resolve({
      id: id,
      name: "sales channel 1 name",
      description: "sales channel 1 description",
      is_disabled: false,
    })
  }),
  update: jest.fn().mockImplementation((id, data) => {
    return Promise.resolve({ id, ...data })
  }),

  listAndCount: jest.fn().mockImplementation(() => {}),

  create: jest.fn().mockImplementation((data) => {
    return Promise.resolve({
      id: id,
      ...data,
    })
  }),

  delete: jest.fn().mockImplementation((id, config) => {
    return Promise.resolve()
  }),

  createDefault: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      name: "sales channel 1 name",
      description: "sales channel 1 description",
      is_disabled: false,
    })
  })
}

const mock = jest.fn().mockImplementation(() => {
  return SalesChannelServiceMock
})

export default mock
