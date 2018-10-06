const React = require('react');
const ReactDOM = require('react-dom');

const Nav = require('./components/Nav');
const MainHeader = require('./components/MainHeader');
const AboutUs = require('./components/AboutUs');
const Features = require('./components/Features');
const Courses = require('./components/Courses');

const jsx = (<React.Fragment>
    <Nav />
<MainHeader />
<AboutUs />
<Features />
<Courses />
</React.Fragment>);

ReactDOM.render(jsx, document.querySelector("#app"));