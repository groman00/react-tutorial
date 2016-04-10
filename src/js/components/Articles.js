var React = require('react');
var jQuery = $ = require('jquery');
var Article = require('./Article');

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
        var results = data.results;
        
        //Add counts attribute to all articles
        $.each(results, function(i, item){
          item.count = 0;
        });
        this.props.setArticles(results);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }, 
  handleArticleClick: function(data){
    this.props.addClickCount(data);
  },
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return (
        <Article data={article} key={article.id} onArticleClick={this.handleArticleClick}/>
      );
    }.bind(this));
    return (
      <section className="article-container">
        <h1>All Articles</h1>
          {articleNodes}
      </section>
    );
  }
});
