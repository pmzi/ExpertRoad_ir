const React = require('react');

const CourseItem = require('./subComponents/CourseItem');

class Courses extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            courses: [{
                id: 1,
                image: 'course-1.jpg',
                title: 'HTML5 + CSS3',
                teacher: 'پویا مظفرمقام',
                duration:'۴۴ ساعت',
                link: '#'
            }]
        }
    }

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
                        {this.courses}
                     </div>
                </div>
            </section>
        );
    }

    get courses(){
        let courses = [];
        for(let courseItem of this.state.courses){
            courses.push(<CourseItem key={courseItem.id} image={courseItem.image} title={courseItem.title} teacher={courseItem.teacher} link={courseItem.link} />)
        }
        return courses;
    }

}

module.exports = Courses;