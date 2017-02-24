import React, {Component, PropTypes} from 'react';

class Html extends Component {

  render() {
    return (
      <html lang="en-us">
        <head></head>
        <body>
          <div id="content"></div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  }
  
}

export default Html;

