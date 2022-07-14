import Header from "./components/Header"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Transactions from "./components/Transactions";

const transaction = new ApolloClient ({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={transaction}>
       <Header />
    <div className="container">
      <Transactions />
      
    </div>
    </ApolloProvider>
   
    </>
  );
}

export default App;
