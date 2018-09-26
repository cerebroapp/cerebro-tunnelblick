import { disconnect } from 'cluster';
import * as api from './api'

export const fn = ({ term, display }) => {
  if (term.match(/^vpn.*/)) {
    Promise.all([
      api.getConfigurationNames(),
      api.getConfigurationStates()
    ]).then(([names, states]) => {
      names.forEach((name, index) => {
        const isConnected = states[index] === 'CONNECTED'
        const title = `${isConnected ? '✅' : '🔴'} ${name}`
        const onSelect = () => isConnected ? api.disconnect(name) : api.connect(name)
        display({ title, onSelect })
      })
    })
  }
}

export const keyword = 'vpn'
