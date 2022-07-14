import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from './pages/Home';
import NamePage from './pages/NamePage';
import StatusPage from './pages/StatusPage';
import TypeOfAccountPage from './pages/TypeOfAccountPage';

// import Transactions from "./components/Transactions";

const transaction = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={transaction}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/namepage' element={<NamePage />} />
              <Route path='/statuspage' element={<StatusPage />} />
              <Route path='/typeofaccountpage' element={<TypeOfAccountPage />} />
            </Routes>
            {/* <Transactions /> */}
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
