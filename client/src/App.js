import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Landing from './pages/Landing';
import Categories from './pages/Categories'
import Random from './pages/Random'
import SingleCategory from './pages/SingleCategory'
import SingleDate from './pages/SingleDate'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import SavedDates from './pages/SavedDates'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#a41a1d',
      light: '#e66d71',
    },
    secondary: {
      main: '#560223',
    },
    background: {
      default: '#e48e8e',
      paper: '#817777',
    },
    error: {
      main: '#f44336',
    }
  },
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Categories" component={Categories} />
            <Route exact path="/Random" component={Random} />
            <Route exact path="/SingleCategory" component={SingleCategory} />
            <Route exact path="/SingleDate" component={SingleDate} />
            <Route exact path="/SavedDates" component={SavedDates} />
          </Switch>
        </Router>
      </ThemeProvider>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
