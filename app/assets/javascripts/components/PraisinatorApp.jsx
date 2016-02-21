import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';

import Header from './Header';


class PraisinatorApp extends React.Component {
  render() {
    return (
      <Grid fluid data-framework="relay">
          <Header root={this.props.root}/>
          <div className="main-container">
            {this.props.children}
          </div>
        <footer className="info">
          <Grid> WithOurPowersCombined </Grid>
        </footer>
      </Grid>
    );
  }
}

export default Relay.createContainer(PraisinatorApp, {
  fragments: {
    root: () => Relay.QL `
      fragment on Query {
        ${Header.getFragment('root')}
      }
    `,

  }
});