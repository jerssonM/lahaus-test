import { mount } from '@vue/test-utils'

const customMount = (component, config) =>
  mount(component, { ...config, mocks: { $t: (msg) => msg, ...config?.mocks } })

export * from '@vue/test-utils'

export { customMount as mount }
