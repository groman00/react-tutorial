var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = $ = require('jquery');
var application = document.getElementById('react-application');

var Articles = React.createClass({
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

var Article = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <article className="article">
        <h2 className="articleTitle">
            {data.title}
        </h2>
        <h3 className="articleByline">
            {data.byline}
        </h3>
        <h4 className="articleDate">
            {data.published}
        </h4>
      </article>
    );
  }
});

ReactDOM.render(
  <Articles url="/api/articles"/>,
  application
);

