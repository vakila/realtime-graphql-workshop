# Building realtime apps with GraphQL & Hasura

_A workshop by Anjana Vakil & Hasura for JSConf Budapest 2022_


From chatting with colleagues, to tracking deliveries, to gaming with friends, so many of the most useful apps out there rely on instant realtime updates. But working with realtime data can be daunting: events and polling and sockets!? Oh my!

One of the great advantages of GraphQL is that it provides drastically simpler ergonomics for working with realtime data thanks to its concept of subscriptions: query-like operations that allow us to continuously receive data updates from the server without making multiple requests or worrying about the underlying data transfer details.

If we combine the power of GraphQL subscriptions with Hasura, an open-source engine that instantly generates a subscription-ready GraphQL API for your data, it turns out that we can develop an end-to-end solution for realtime in no time!

In this hands-on workshop, we’ll build a full-stack realtime app using GraphQL subscriptions. Along the way we’ll learn:

- The basics of GraphQL APIs, and how they differ from REST
- The differences between queries & subscriptions in GraphQL, and when to use each
- How to use Hasura to quickly serve a GraphQL API backed by a Postgres database
- Approaches for data modeling, authentication, and authorization in Hasura GraphQL apps
- How to work with GraphQL subscriptions on the frontend using Apollo Client & React
- Performance considerations for working with GraphQL subscriptions

_Who should attend (spoiler: you!)_

Developers of all experience levels are welcome, whether frontend, backend, or full-stack! No previous experience with GraphQL or Hasura will be assumed, only comfort with JS & web basics. Our reference project will use React for the frontend, but proficiency with React won’t be required and we’ll do our best to support participants who want to use a different frontend framework - GraphQL works with them all!

Optionally, over-achievers can get a head start with the following tutorials:

- GraphQL basics: https://hasura.io/learn/graphql/intro-graphql
- Hasura basics: https://hasura.io/learn/graphql/hasura
- GraphQL in React or your favorite frontend: https://hasura.io/learn/#front-end-tutorials

_What to bring_

Participants should bring a laptop with a web browser & code editor (or just a web browser, if using a web-based editor like CodeSandbox)! Signing up for a free Hasura Cloud account (cloud.hasura.io) is recommended, but not required.




## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information about additional scripts and options that come along with Create React App, see [here](./CreateReactApp.md).

## Credits

This workshop is based on prior work by Hasura team members Catalin Pit's [Realtime Polling App](https://www.freecodecamp.org/news/build-a-full-stack-real-time-voting-app-with-hasura-and-react/)