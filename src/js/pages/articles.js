var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var initialState = {
  data: [],
  url: "/api/articles",
  pollInterval: 2000
};

var reducer = function(state, action) {
  if(state === undefined) {
    return initialState;
  }
  var newState = state;
  switch(action.type) {
    case 'add_click_count':
      var id = action.data;
      newState = Object.assign({}, state, {
        data: state.data.map((article, index) => {
          if (id === article.id) {
            return Object.assign({}, article, {
              count: article.count+1
            });
          }
          return article;
        })
      });
      break;
    case 'set_articles':
      newState = Object.assign({}, state, {data: action.data})
      break;      
  }
  console.log(newState);
  return newState;
};

var store = createStore(reducer, initialState);

var Articles = require('../components/Articles');

var ArticlesState = function(state) {
  return {
    data: state.data,
    url: state.url,
    pollInterval: state.pollInterval
  }
};

var ArticlesDispatch = function(dispatch) {
  return {
    setArticles: function(data) {
      dispatch({
        type: 'set_articles',
        data: data
      });
    },
    addClickCount: function(data) {
      dispatch({
        type: 'add_click_count',
        data: data
      });
    }    
  }
};

Articles = connect(
  ArticlesState,
  ArticlesDispatch
)(Articles);

ReactDOM.render(
  <Provider store={store}>
    <Articles />
  </Provider>,
  document.getElementById('react-application')
);


