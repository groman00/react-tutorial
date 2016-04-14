var React = require('react');
var jQuery = $ = require('jquery');
var Address = require('./Address');
var Company = require('./Company');

module.exports = React.createClass({
  toggleCollapse: function(e){
    //simple toggler
    e.preventDefault();
    $(e.currentTarget).siblings('.collapse').eq(0).toggleClass('in');
  },
  render: function() {
    var data = this.props.data;
    return (
      <article className="content-item">
        <h2 className="userTitle">
            {data.name}
        </h2>
        <h4 className="userField">
          {data.name}
        </h4>
        <h4 className="userField">
          {data.username}
        </h4>
        <h4 className="userField">
          {data.email}
        </h4>
        <div className="company">
          <a href="#" onClick={this.toggleCollapse}>Company &raquo;</a>
          <Company data={data.company} />        
        </div>
        <div className="addresss">
          <a href="#" onClick={this.toggleCollapse}>Address &raquo;</a>
          <Address data={data.address} />
        </div>
        <h4 className="userField">
          {data.phone}
        </h4>
        <h4 className="userField">
          {data.website}
        </h4>
      </article>
    );
  }
});

