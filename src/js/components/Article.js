var React = require('react');

module.exports = React.createClass({
  handleArticleLink: function(e){
    console.log("Event", e);
    console.log("Data", this.props.data);
    return false;
  },
  render: function() {
    var data = this.props.data;
    return (
      <article className="article">
        <h2 className="articleTitle">
            <a href="#" onClick={this.handleArticleLink}>{data.title}</a>
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
