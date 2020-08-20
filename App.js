import React from 'react';
import Homepage from './page/homepage';
import Vegpage from './page/veg';
import NonVegpage from './page/nonveg';
import Dairy from './page/dairy';
import General from './page/general';
import Spices from './page/spices';
import './App.css';
import SignInAndOut from './page/signpage';
import { auth, createUserProfileDocument } from './firebase/firebase';
import Header from './components/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/veg" component={Vegpage} />
            <Route path="/spices" component={Spices} />
            <Route path="/general" component={General} />
            <Route path="/dairy" component={Dairy} />
            <Route path="/nonveg" component={NonVegpage} />
            <Route path="/sign" component={SignInAndOut} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
