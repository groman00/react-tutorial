var React = require('react');
var jQuery = $ = require('jquery');
var User = require('./User');

module.exports = React.createClass({
  // getInitialState: function() {
  //   return {data: []};
  // },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.props.setUsers(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }, 
  render: function() {
    var userNodes = this.props.data.map(function(user) {
      return (
        <User data={user} key={user.username} />
      );
    }.bind(this));
    return (
      <section className="container">
        <h1>All Users</h1>
          {userNodes}
      </section>
    );
  }
});
