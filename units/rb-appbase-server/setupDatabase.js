// @flow

import process from 'process'

import log from '../rb-base-server/log'
import ObjectManager from '../rb-base-server/ObjectManager'

// Guarantee that all object registrations and schema definitions are executed
import '../_configuration/rb-base-server/graphql/_schemas'

ObjectManager.initializePersisters( true, () => {
  log( 'info', 'rb-appbase-server setupDatabase completed', {})
  process.exit()
})
