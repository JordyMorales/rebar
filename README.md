# Rebar

Multi-tenant SaaS boilerplate + examples for universal web application with React, Material-UI, Relay, GraphQL, JWT, Node.js, C* DB - Cassandra/Elassandra/Scylla.


[*Live demo*](http://rebar-demo.MachineAcuity.com/).



# Technology stack

## Client

| **Technology** | **Description**|
|----------------|----------------|
| [found](https://github.com/4Catalyzer/found)                    | Extensible route-based routing for React applications. |
| [GraphQL](http://graphql.org/docs/getting-started/)             | A query language for describing the capabilities and requirements of data models for client‐server applications. |
| [JSS](http://cssinjs.org/)                                      | JSS is a more powerful abstraction over CSS. It uses JavaScript as a language to describe styles in a declarative and maintainable way. |
| [Material UI](http://www.material-ui.com/)                      | Library for implementing [Material Design](https://www.google.com/design/spec/material-design/introduction.html) in React. All user interface in this kit is built predominantly using Material UI components. |
| [React](https://facebook.github.io/react/)                      | The best library for building modern browser-based and mobile UIs. |
| [React Helmet](https://github.com/nfl/react-helmet)             | Reusable React component will manage all of your changes to the document head with support for document title, meta, link, script, and base tags. |
| [Relay](https://facebook.github.io/relay/)                      | A Javascript framework for building data-driven react applications. |

## Server

| **Database** | **Description**|
|----------------|----------------|
| [Cassandra](http://cassandra.apache.org/)                       | The right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages. |
| [Elassandra](http://www.strapdata.com/)                         | Elassandra Combines Cassandra And Elasticsearch In A Single Powerful Integrated Solution. |
| [Scylla](https://www.scylladb.com/)                             | The Real-Time Big Data Database. Scale-up performance of 1,000,000 IOPS per node, scale-out to hundreds of nodes and 99% latency of <1 msec. |

| **Technology** | **Description**|
|----------------|----------------|
| [Data Loader](https://github.com/facebook/dataloader)           | Generic utility to be used as part of your application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching. |
| [Express](https://expressjs.com)                                | Fast, unopinionated, minimalist web framework for Node.js. |
| [express-cassandra](https://express-cassandra.readthedocs.io)   | Cassandra ORM/ODM/OGM for Node.js with optional support for Elassandra & JanusGraph. |
| [Express GraphQL](https://github.com/graphql/express-graphql)   | A Node.js express library that allows the creation of GraphQL servers. |
| [JWT](https://jwt.io/)                                          | JSON Web Tokens is an industry standard [RFC 7519](https://tools.ietf.org/html/rfc7519) method for representing claims securely between two parties. |
| [Node.js](https://nodejs.org/en/)                               | Event-driven, non-blocking I/O runtime based on JavaScript that is lightweight and efficient. |
| [Winston](https://github.com/winstonjs/winston)                 | A logger for just about everything. |

## Development tools

| **Technology** | **Description**|
|----------------|----------------|
| [Babel](http://babeljs.io)                                      | Transpiles ESX to ESX and performs relay transformations. |
| [concurrently](https://www.npmjs.com/package/concurrently)      | Run multiple commands concurrently. |
| [documentation](https://www.npmjs.com/package/documentation)    | The documentation system for modern JavaScript. |
| [ESLint](https://eslint.org)                                    | A fully pluggable tool for identifying and reporting on patterns in JavaScript. |
| [Flow](http://flowtype.org/)                                    | Static type checker, designed to find type errors in JavaScript programs. |
| [Husky](https://github.com/typicode/husky)                      | Git hooks for eslint and prettier. |
| [Jest](https://jestjs.io/)                                      | A delightful JavaScript Testing Framework with a focus on simplicity. |
| [LocalTunnel](https://localtunnel.github.io/www/)               | Expose yourself to the world. |
| [Prettier](https://github.com/prettier/prettier/)               | Code formatter for javaScript. |
| [Puppeteer](https://github.com/GoogleChrome/puppeteer)           | Headless Chrome Node API . |
| [Webpack](http://webpack.github.io)                             | Bundles npm packages, application Java Script, CSS, images, etc. into bundles. |



# Development Setup

## Prerequisites

The setup is for OS X only:

* **[Node.js](https://nodejs.org)**: minimum version as specified in [`package.json`](package.json#L106).  
* **yarn**: install using `npm install -g yarn`.
* **[cqlah](http://cassandra.apache.org/doc/latest/tools/cqlsh.html)**: optionally installed locally.

## Setting up Scylla in docker

### Setup

```
docker pull scylladb/scylla:3.0.8
docker run --privileged -it --link scylly --rm scylladb/scylla:3.0.8 cqlsh scylly
```

### Start/Stop

```
docker start scylly
docker stop scylly
```

### Troubleshooting

```
cqlsh
docker logs scylly
```

If cqlsh does not manage to connect to docker, or is not installed locally, use:

```
docker run --privileged -it --link elassie --rm strapdata/elassandra cqlsh elassie
```

### Cleanup

```
docker stop scylly
docker rm scylly
```

## Setup on local development machine

In order to set up the project locally, perform the following steps:

| Action                    | Notes                               |
| ------------------------- | ----------------------------------- |
| `git clone https://github.com/MachineAcuity/rebar.git` | Clone from github. Alternatively, you can download the source and update in some different way. |
| `yarn`                    | Install node packages. |
| `yarn setup-local`        | Set up default configuration for running the boilerplate. |
| Edit `.env`               | Set database server / name, secrets, API keys. etc. |
| `yarn setup-database`     | Creates Cassandra schema. |

In addition to the above, you might want to specify `JWT_SECRET` by modifying the `.env` file. This step can be skipped if you do not care about the actual security and simply want to get the project running.



# Development

## Running in Development Mode

In order to develop, three servers need to be started:

* Web server.
* Webpack server.
* Relay compiler (watching).
* Local tunnel.

This can be done with one command: `yarn dev`.
To open the web app: navigate to `http://localhost:28605`, or whatever IP was assigned when running `yarn update-ip`.

## Configuring Local Tunnel

In some cases it is necessary to make your development environment publicly available under HTTPS. The service [Local Tunnel](https://localtunnel.github.io/www/) allows you to easily share a Rebar project on your local development machine without messing with DNS and firewall settings. In order to use LocalTunnel, edit [units/_configuration/rb-base-tools/tunnels.json](https://github.com/MachineAcuity/rebar/blob/master/units/_configuration/rb-base-tools/tunnels.json). Replace the value of

```
"subdomain": "replace-with-your-own-domain"
```

with your preferred value. Please notice that LocalTunnel allocates subdomain names on a first come first serve basis, for the duration of using the service. Navigate to `https://replace-with-your-own-domain.localtunnel.me`.



# Testing

## Jest

Examples of Jest unit tests are available in [units/rb-base-test](https://github.com/MachineAcuity/rebar/tree/master/units/rb-base-test).

## End to End Testing

Example of end-to-end tests suing Jest and Puppeteer are available on github in repository [MachineAcuity/rebar-test-e2e](https://github.com/MachineAcuity/rebar-test-e2e).



# Production Setup

In order to run rebar in production-like mode you can:

```
$ yarn build-deployment
...
$ export NODE_ENV=production
$ node ./deployment/units/rb-base-server/server
```

A production  setup would include the `deployment` directory, with appropriate `.env` file, and running `units/rb-base-server/server` in some sort of fashion.
