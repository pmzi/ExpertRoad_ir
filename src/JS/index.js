const React = require('react');
const ReactDOM = require('react-dom');

const Nav = require('./components/Nav');
const MainHeader = require('./components/MainHeader');
const AboutUs = require('./components/AboutUs');

const jsx = (<React.Fragment>
    <Nav />
<MainHeader />
<AboutUs />
</React.Fragment>);

ReactDOM.render(jsx, document.querySelector("#app"));