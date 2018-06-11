import React, { Component } from 'react';
import './App.css';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

import ExchangeRates from "./exchangeRates.component";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h2>My first Apollo app <span role="img" aria-label="rocket">🚀</span></h2>
          </header>
          <ExchangeRates className="App-intro" />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
