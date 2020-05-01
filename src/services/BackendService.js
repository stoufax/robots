import axios from 'axios'

export class BackendService {
  constructor(config) {
    this.client = axios.create(config)
  }

  get authToken() {
    return this.client.defaults.headers.common['Authorization']
  }

  set authToken(newValue) {
    if (newValue === null) {
      delete this.client.defaults.headers.common['Authorization']
    } else {
      this.client.defaults.headers.common['Authorization'] = newValue
    }
  }

  get baseUrl() {
    return this.config.baseURL
  }

  async fetchRobots() {
    const response = await this.client.get('users')
    return response.data
  }
}
