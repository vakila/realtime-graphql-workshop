import {gql} from "@apollo/client";
import React from "react";
import { Card } from "react-bootstrap";

const QUERY_GET_POLL = gql`
  query {
    TODO
  }
`;

const MUTATION_VOTE = gql`
  mutation vote {
    TODO
  }
`;

const SUBSCRIPTION_RESULT = gql`
  subscription getResult {
    TODO
  }
`;

const SUBSCRIPTION_ONLINE_USERS = gql`
  subscription getOnlineUsersCount {
    TODO
  }
`;

const MUTATION_MARK_USER_ONLINE = gql`
  mutation userOnline {
    TODO
  }
`;

const MUTATION_NEW_USER = gql`
  mutation newUser {
    TODO
  }
`;

const GraphQLQueryList = () => (
  <div className="container">
    <div className="col-md-12 cardGraphQL">
      <Card>
        <Card.Header>
          GraphQL Queries/Mutations/Subscriptions in this page
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-4">
              Get the Poll question and options:
              <pre>{QUERY_GET_POLL.loc.source.body}</pre>
              Create a new user:
              <pre>{MUTATION_NEW_USER.loc.source.body}</pre>
            </div>
            <div className="col-md-4">
              Cast a vote:
              <pre>{MUTATION_VOTE.loc.source.body}</pre>
              Mark user online:
              <pre>{MUTATION_MARK_USER_ONLINE.loc.source.body}</pre>
            </div>
            <div className="col-md-4">
              Show live results:
              <pre>{SUBSCRIPTION_RESULT.loc.source.body}</pre>
              Get real-time number of users:
              <pre>{SUBSCRIPTION_ONLINE_USERS.loc.source.body}</pre>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export {
  GraphQLQueryList,
  QUERY_GET_POLL,
  MUTATION_VOTE,
  SUBSCRIPTION_RESULT,
  SUBSCRIPTION_ONLINE_USERS,
  MUTATION_MARK_USER_ONLINE,
  MUTATION_NEW_USER,
};