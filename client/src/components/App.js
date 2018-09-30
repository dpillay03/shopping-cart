import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Homepage from '../components/homepage/homepage.jsx';
import Cart from '../components/cart/cart.jsx';

export default class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return <React.Fragment>
      <Router>
        <div id="route-container">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Router>
    </React.Fragment>
  }
}
