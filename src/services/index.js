import config from '../config'
import { BackendService } from './BackendService'

export const backend = new BackendService({ baseURL: config.backendUrl })
