import React, { Fragment, useState, us } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";

import "./globalStyles"
import 'bootstrap'
import Routes from './Routes/Index';

export default function App(): JSX.Element {


  return (
    <Fragment>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <main>
              <Routes/>
            </main>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>

     
    </Fragment>
  )
}
const root = document.getElementById('app-root');
ReactDOM.render(<App />, root)