var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var initialState = {
  data: [],
  url: "/api/users",
  pollInterval: 2000
};

var reducer = function(state, action) {
  if(state === undefined) {
    return initialState;
  }
  var newState = state;
  switch(action.type) {
    case 'set_users':
      newState = Object.assign({}, state, {data: action.data})
      break;   
  }
  return newState;
};

var store = createStore(reducer, initialState);

var Users = require('../components/users/Users');

var UsersState = function(state) {
  return {
    data: state.data,
    url: state.url,
    pollInterval: state.pollInterval
  }
};

var UsersDispatch = function(dispatch) {
  return {
    setUsers: function(data) {
      dispatch({
        type: 'set_users',
        data: data
      });
    }   
  }
};

Users = connect(
  UsersState,
  UsersDispatch
)(Users);

ReactDOM.render(
  <Provider store={store}>
    <Users />
  </Provider>,
  document.getElementById('react-application')
);


