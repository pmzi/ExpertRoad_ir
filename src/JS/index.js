const React = require('react');
const ReactDOM = require('react-dom');

const Nav = require('./components/Nav');

const jsx = (<Nav />);

ReactDOM.render(jsx, document.querySelector("#app"));