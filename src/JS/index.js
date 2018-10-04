const React = require('react');
const ReactDOM = require('react-dom');

const Layout = require('./components/Layout');

const jsx = (<Layout>
    <div></div>
</Layout>);

ReactDOM.render(jsx, document.querySelector("#app"));