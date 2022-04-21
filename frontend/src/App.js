import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Rent from "./components/Pages/Rent/Rent";
import Buy from "./components/Pages/Buy/Buy";
import Search from "./components/Pages/Search/Search";
import About from "./components/Pages/About/About";
import Property from "./components/Pages/Property/Property";
import Login from "./components/Pages/Login/Login";
import { useAuth0 } from '@auth0/auth0-react';



const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  404 NOT FOUND
                </h1>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="rent" element={<Rent />} />
          <Route path="buy" element={<Buy />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="property">
            <Route path=":propertyId" element={<Property />} />
          </Route>
          <Route
            path="/about"
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  ABOUT
                </h1>
              </main>
            }
          />
        </Routes>
      </div>
    </ApolloProvider>
  ); 
}

export default App;
