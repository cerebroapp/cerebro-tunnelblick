import { shellCommand } from 'cerebro-tools'

const tellTunnelblick = (action) => (
  shellCommand(`osascript -e 'tell application "Tunnelblick" to ${action}'`)
)

export const getConfigurationNames = () => (
  tellTunnelblick('get name of configurations')
    .then(result => result.split(', '))
)

export const getConfigurationStates = () => (
  tellTunnelblick('get state of configurations')
    .then(result => result. split(', '))
)

export const disconnect = (name) => (
  tellTunnelblick(`disconnect \"${name}\"`)
)

export const connect = (name) => (
  tellTunnelblick(`connect \"${name}\"`)
)
