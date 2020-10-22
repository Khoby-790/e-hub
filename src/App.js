import React, {Fragment} from 'react';
import {Navbar} from './components';
import {BrowserRouter as XBrowser, Switch, Route} from 'react-router-dom';
import Election from './pages/Election';
import Polls from './pages/Polls';

const App = () => {
  return (
    <XBrowser>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact component={Election} path="/" />
          <Route path="/polls" component={Polls} />
        </Switch>
      </Fragment>
    </XBrowser>
  );
};

export default App;
