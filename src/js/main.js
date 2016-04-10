var React = require('react');
var ReactDOM = require('react-dom');
var Articles = require('./components/Articles');
var application = document.getElementById('react-application');

ReactDOM.render(
  <Articles url="/api/articles"/>,
  application
);

