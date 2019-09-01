// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('Inscriptio', {
  fields: {
    id: 'uuid',
    Inscriptio_artifact_id: 'uuid',
    Inscriptio_user_id: 'uuid',
    Inscriptio_LocationLon: 'text',
    Inscriptio_LocationLat: 'text',
    Inscriptio_Notes: 'text',
  },

  key: [ 'Inscriptio_user_id', 'id' ],
})

export default true
