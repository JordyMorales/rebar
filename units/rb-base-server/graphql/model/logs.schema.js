// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'logs', {
  fields: {
    date: 'text',
    datetime: 'timestamp',
    level: 'text',
    message: 'text',
    details: 'text',
    issue_id: 'text',
    local_ip: 'text',
    port: 'text',
    host: 'text',
    process_pid: 'int',
    err_message: 'text',
    err_stack: 'text',
    err_info: 'text',
    req_headers: 'text',
    req_cookies: 'text',
    req_ip: 'text',
    req_body: 'text',
    user_id: 'uuid',
    site_id: 'uuid',
  },
  key: [ 'date', 'datetime' ],
})

export default true
