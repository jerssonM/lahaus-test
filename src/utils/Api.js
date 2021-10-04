import axios from 'axios'

import routes from '../config/routes'

export default class Api {
  apiInstance
  instance

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api()
    }

    return this.instance
  }

  initApi(baseUrl) {
    this.apiInstance = axios.create({
      baseURL: baseUrl,
    })
    this.loadApiRoutes()
  }

  loadApiRoutes() {
    const routeKeys = Object.keys(routes)
    routeKeys.forEach((key) => {
      const route = routes[key]
      this[key] = async (config) => {
        const response = await this.apiInstance[route.method](
          route.path,
          config
        )
        if (response && response.data && route.serializer) {
          response.data = route.serializer(response.data)
        }
        return response
      }
    })
  }
}
