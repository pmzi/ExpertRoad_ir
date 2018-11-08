const React = require('react');
const ReactDOM = require('react-dom');

const SmoothScroll =  require('smooth-scroll');

const Nav = require('./components/Nav');
const MainHeader = require('./components/MainHeader');
const AboutUs = require('./components/AboutUs');
const Features = require('./components/Features');
const Courses = require('./components/Courses');
const Departments = require('./components/Departments');
const ShowTeachers = require('./components/ShowTeachers');
const Testimonials = require('./components/Testimonials');
const ContactUs = require('./components/ContactUs');
const Footer = require('./components/Footer');

const jsx = (<React.Fragment>
    <Nav />
    <MainHeader />
    <AboutUs />
    <Features />
    <Courses />
    <Departments />
    <ShowTeachers />
    <Testimonials />
    <ContactUs src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1617.8108484030188!2d50.9429853!3d35.8092195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dbe65d081dc81%3A0xf0daf4af6467cb3c!2sShahed+Cultural+House!5e0!3m2!1sen!2s!4v1541686415559' />
    <Footer />
</React.Fragment>);

ReactDOM.render(jsx, document.querySelector("#app"));

new SmoothScroll('a[href*="#"]');