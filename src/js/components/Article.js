var React = require('react');

module.exports = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    //console.log("Event", e);
    //console.log("Data", this.props.data);
    //console.log("Article", this);
    this.props.onArticleClick(this.props.data.id);
  },
  render: function() {
    var data = this.props.data;
    return (
      <article className="content-item">
        <h2 className="articleTitle">
            <a href="#" onClick={this.handleClick}>{data.title}</a>
        </h2>
        <h3 className="articleByline">
            {data.byline}
        </h3>
        <h4 className="articleDate">
            {data.published}
        </h4>
        <h4 className="articleCount">
            Count: {data.count}
        </h4>        
      </article>
    );
  }
});
