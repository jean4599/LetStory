var React = require('react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.props.title}</title>
          <link href="//cdn.muicss.com/mui-0.9.4/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
        </head>
        <body>
            <div id='view' dangerouslySetInnerHTML={{__html: this.props.body}} />
            <script type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(this.props.props)}} />
        </body>
      </html>
    );
  }
});

module.exports = Html;
