import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation {
    increment @client
  }
`;

const Button = props => <button onClick={e => props.inc()}>Increment</button>;

export default graphql(mutation, { name: 'inc' })(Button);
