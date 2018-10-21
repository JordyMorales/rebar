// @flow

import os from 'os'

export default function() {
  const interfaces = os.networkInterfaces()

  for ( let k in interfaces ) {
    // $AssureFlow it will be there
    for ( let k2 in interfaces[k]) {
      // $AssureFlow it will be there
      const address = interfaces[k][k2]
      if ( address.family === 'IPv4' && !address.internal ) return address.address
    }
  }
}
