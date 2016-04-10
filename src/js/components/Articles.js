var React = require('react');
var jQuery = $ = require('jquery');
var Article = require('./Article');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },  
  render: function() {
    var articleNodes = this.state.data.map(function(article) {
      return (
        <Article data={article} key={article.id} />
      );
    });
    return (
      <section className="article-container">
        <h1>All Articles</h1>
        {articleNodes}
      </section>
    );
  }
});