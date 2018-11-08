const React = require('react');

const CourseItem = require('./subComponents/CourseItem');

class Courses extends React.Component{

    render(){
        return (
            <section id='courses' className='courses'>
                <div className='courses__container layout'>
                     <header className='courses__header'>
                         <h4 className='courses__header-title'>
                             دوره ها
                         </h4>
                     </header>
                     <div className='courses__coursesWrapper'>
                        <CourseItem image='course-1.jpg' title='HTML5 + CSS3' duration='56 saat' teacher='Pouya MozaffarMagham' link='' />
                        <CourseItem image='course-1.jpg' title='' duration='' teacher='' link='' />
                        <CourseItem image='course-1.jpg' title='' duration='' teacher='' link='' />
                     </div>
                </div>
            </section>
        );
    }

}

module.exports = Courses;