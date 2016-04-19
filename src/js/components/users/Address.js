var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;

    var fieldNodes = Object.keys(data).map(function(key, i, obj) {
      if(typeof data[key] !== 'object') {
        return <li key={key}>{key}: {data[key]}</li>;
      }
    });

    return (
      <ul className="collapse">
        {fieldNodes}
      </ul>
    );
  }
});