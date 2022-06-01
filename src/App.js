import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import { GraphQLQueryList } from "./GraphQL";
import { Footer, Header } from "./Components";
import './App.css';

function App() {
  return (
  <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <GraphQLQueryList />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
