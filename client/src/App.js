import './App.css';
import logo from './logo.png'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import People from './components/People';
import Person from './components/Person';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img 
            src={logo}
            alt="Star Wars"
            style={{ width: 300, display: 'block', margin: 'auto'}}
          />
          <Route exact path="/" component={People} />
          <Route exact path="/person/:name" component={Person} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
