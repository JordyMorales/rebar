# Universal Relay Boilerplate (URB)

Boilerplate + examples for universal web application with React, Material-UI, Relay, GraphQL, JWT, Node.js, Apache Cassandra / Elassandra.


* [Project Overview](http://codefoundries.com/products/UniversalRelayBoilerplate.html).

* [Project Details](http://codefoundries.com/developer/rebar/).

* [Live demo I](http://universal-relay-boilerplate.herokuapp.com/) - uses in-memory persister.

* Updates and Announcements [@CodeFoundries](https://twitter.com/CodeFoundries) and [our blog](http://codefoundries.com/blog/).



# Technologies used in Rebar and Universal Relay Boilerplate

For the most up to date list of technologies used please go to [CodeFoundries.com](http://codefoundries.com/developer/rebar/technologies-used.html).

## Client side

| **Technology** | **Description**|
|----------------|----------------|
| [Express](https://expressjs.com)                                | Fast, unopinionated, minimalist web framework for Node.js |
| [found](https://github.com/4Catalyzer/found)                    | Extensible route-based routing for React applications. |
| [JSS](http://cssinjs.org/)                                      | JSS is a more powerful abstraction over CSS. It uses JavaScript as a language to describe styles in a declarative and maintainable way. |
| [Material UI](http://www.material-ui.com/)                      | Library for implementing [Material Design](https://www.google.com/design/spec/material-design/introduction.html) in React. All user interface in this kit is built exclusively with Material UI components. |
| [React](https://facebook.github.io/react/)                      | The best library for building modern browser-based and mobile UIs. |
| [React Helmet](https://github.com/nfl/react-helmet)             | Reusable React component will manage all of your changes to the document head with support for document title, meta, link, script, and base tags. |
| [React Native](https://facebook.github.io/react-native/)        | React Native (currently not available) enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. |
| [Relay](https://facebook.github.io/relay/)                      | A Javascript framework for building data-driven react applications. |

## Server side

| **Technology** | **Description**|
|----------------|----------------|
| [Apache Cassandra](http://cassandra.apache.org/)                | The right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages. |
| [Data Loader](https://github.com/facebook/dataloader)           | Generic utility to be used as part of your application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching. |
| [Elassandra](http://www.strapdata.com/)                         | Elassandra Combines Cassandra And Elasticsearch In A Single Powerful Integrated Solution. URB works well with Elassandra. |
| [Express GraphQL](https://github.com/graphql/express-graphql)   | A Node.js express library that allows the creation of GraphQL servers. |
| [GraphQL](http://graphql.org/docs/getting-started/)             | A query language for describing the capabilities and requirements of data models for client‐server applications. |
| [JWT](https://jwt.io/)                                          | JSON Web Tokens is an industry standard [RFC 7519](https://tools.ietf.org/html/rfc7519) method for representing claims securely between two parties. |
| [Node.js](https://nodejs.org/en/)                               | Event-driven, non-blocking I/O runtime based on JavaScript that is lightweight and efficient. |

## Development tools

| **Technology** | **Description**|
|----------------|----------------|
| [Babel](http://babeljs.io)                                      | Transpiles ESX to ESX and performs relay transformations. |
| [ESLint](https://eslint.org)                                    | A fully pluggable tool for identifying and reporting on patterns in JavaScript. |
| [Flow](http://flowtype.org/)                                    | Static type checker, designed to find type errors in JavaScript programs. |
| [Husky](https://github.com/typicode/husky)                      | Git hooks for eslint and prettier. |
| [Prettier](https://github.com/prettier/prettier/)               | Code formatter for javaScript. |
| [React Hot Loader](gaearon.github.io/react-hot-loader/)         | Allows tweaking of React components in real time. |
| [Webpack](http://webpack.github.io)                             | Bundles npm packages, application Java Script, CSS, images, etc. into bundles. |



# Development Setup

For the most up to date setup instructions please go to the [development setup instructions](http://codefoundries.com/developer/rebar/development-setup.html).

## Initial Development Machine Setup

The setup is for OS X only. Prerequisites:

* **Install [Node.js](https://nodejs.org)** minimum version: `8.9.0`.  
* **Install [Git](https://git-scm.com/downloads)** minimum version: `5.6.0`.  
* (currently not available) **Install react-native-cli** run `npm install -g react-native-cli` for app development with React Native only.
* **Install yarn** run `npm install -g yarn`

## Initial Project setup on local machine

In order to set up the project locally, perform the following steps:

| Action                    | Notes                               |
| ------------------------- | ----------------------------------- |
| `git clone https://github.com/codefoundries/UniversalRelayBoilerplate` | Clone from github. Alternatively, you can download the source and update in some different way. |
| `yarn` | Install node packages. |
| `yarn setup-local` | Set up default configuration for running the boilerplate. |

In addition to the above, you might want to specify `JWT_SECRET` by modifying the `.env` file. This step can be skipped if you do not care about the actual security and simply want to get the project running.

## Running in development mode

In order to develop, three servers need to be started:

* Web server.
* Webpack server.
* (currently not available) React Native packager.

This can be done with one command:

* Start application HTTP and Webpack server: `yarn dev`.

To open the app:

* Navigate to `http://localhost:26005`, or whatever IP was assigned when running `yarn update-ip` or after installation.

(currently not available) To run the iOS app in the emulator:

* If the IP of your development machine has changed, run `yarn update-ip`.
* Run `react-native run-ios`.

## Configuring Cassandra locally

* Install and configure Cassandra following the steps in [Cassandra Installation on Mac](/developer/cassandra/cassandra-installation-mac.html).
* Update the name of the database and the database server in `/.env`, or use the defaults. The defaults are:

```javascript
CASSANDRA_CONNECTION_POINTS=localhost
CASSANDRA_KEYSPACE=urb
```

* Configure to use Cassandra as default persister: `yarn update-default-persister -- cassandra`.
* Create the database with `yarn setup-database`.



# Further Details

We keep the information about the Universal Relay Boilerplate and Rebar updated on our website:

## Architecture and Developer Resources

* [Unit Structure](http://codefoundries.com/developer/rebar-architecture/unit-structure.html).


## Architecture Details

The following documents explain in detail certain aspects of the architecture in depth:

* [Cassandra, meet Relay. Relay, meet Cassandra](http://codefoundries.com/developer/cassandra/cassandra-meet-relay.html). Explanation of how Cassandra and Express GraphQL work together.
* [Isomorphic React Relay](http://codefoundries.com/developer/single-page-application/isomorphic-react-relay.html). Explains the approach to isomorphism taken in implementing the starter kit.
* [Isomorphic Server Variables](http://codefoundries.com/developer/single-page-application/isomorphic-server-variables.html). Using variables and settings in an isomorphic application - client rendering, server rendering.
* [SEO Using Isomorphic Application With Relay and Helmet](http://codefoundries.com/developer/single-page-application/seo-isomorphic-react-helmet.html). How to make SEO-friendly pages with React, Relay and Helmet.

## Additional resources

The following documents, while not explicitly related to the boilerplate, can be useful while running and modifying the kit:

* [Cassandra Cheatsheet](http://codefoundries.com/developer/cassandra/cassandra-cheatsheet.html). List of common commands in CQL.
* [Cassandra Installation on Mac](http://codefoundries.com/developer/cassandra/cassandra-installation-mac.html). Simple steps for setting up an instance of Cassandra for development.
* [Git Cheatsheet](http://codefoundries.com/developer/git/git-cheatsheet.html). Some useful git commands.
* [React Cheatsheet](http://codefoundries.com/developer/react/react-cheatsheet.html). Techniques for working with React used in the starter kit.
* [Where to Store Your JWTs - Cookies vs HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage/). Explains the advantages of using HTTP only cookies.

## Universal Relay Boilerplate (URB) Classic

The previous version of this repository with Material-UI `0.18.x` and Relay `0.10` is available at [Universal Relay Boilerplate Classic](https://github.com/codefoundries/UniversalRelayBoilerplateClassic). The current version is unfinished and under heavy development. Additional units with Windows support and DynamoDB support can be found at [Universal Relay Boilerplate Extra](https://github.com/codefoundries/UniversalRelayBoilerplateExtra).
The following mostly apply to URB classic. Will be removed once updated versions are created.

* [Environment Variables Configuration](http://codefoundries.com/developer/rebar/configuration-environment-variables.html).
* [Customizing Material-UI Look and Feel](http://codefoundries.com/developer/rebar/configuration-material-ui.html).
* [Configuration Folder](http://codefoundries.com/developer/rebar/configuration-folder.html).
* [NPM Tasks](http://codefoundries.com/developer/rebar/npm-tasks.html).
* [Project Structure](http://codefoundries.com/developer/rebar/project-structure.html).
* [Troubleshooting](http://codefoundries.com/developer/rebar/troubleshooting.html).
