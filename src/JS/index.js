const React = require('react');
const ReactDOM = require('react-dom');

const Nav = require('./components/Nav');
const MainHeader = require('./components/MainHeader');
const AboutUs = require('./components/AboutUs');
const Features = require('./components/Features');
const Courses = require('./components/Courses');
const Departments = require('./components/Departments');
const ShowTeachers = require('./components/ShowTeachers');
const Testimonials = require('./components/Testimonials');

const jsx = (<React.Fragment>
    <Nav />
    <MainHeader />
    <AboutUs />
    <Features />
    <Courses />
    <Departments />
    <ShowTeachers />
    <Testimonials />
</React.Fragment>);

ReactDOM.render(jsx, document.querySelector("#app"));