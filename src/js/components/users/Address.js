var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;

    //This is most likey the wrong way render object keys in react
    var fieldNodes = [];
    for(var key in data){
      if(typeof data[key] !== 'object') {
        fieldNodes.push(<li key={key}>{key}:{data[key]}</li>);
      }
    };

    return (
      <ul className="collapse">
        {fieldNodes}
      </ul>
    );
  }
});