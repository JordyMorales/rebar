// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('Ensayo', {
  fields: {
    id: 'uuid',
    Ensayo_artifact_id: 'uuid',
    Ensayo_user_id: 'uuid',
    Ensayo_Content: 'text',
    Ensayo_Description: 'text',
    Ensayo_Title: 'text',
  },

  key: [ 'Ensayo_user_id', 'id' ],
})

export default true
