import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Button from './Button';

const query = gql`
  query {
    myapp @client {
      counter
    }
  }
`;

const App = props => (
  <React.Fragment>
    <p>{props.data.myapp.counter}</p>
    <Button />
  </React.Fragment>
);

export default graphql(query)(App);
