import React from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';

class App extends React.Component {
  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <Quiz />
        </Layout>
      </div>
    );
  }
}


export default App;
