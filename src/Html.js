import * as React from 'react';

export default class Html extends React.Component {
  render() {
    return (
      <html>
        <head></head>
        <body>
          <div>
            <h1>this is Html Component.</h1>
          </div>

          <script src="/dist/bundle.js"></script>
        </body>
      </html>
    );
  }
}