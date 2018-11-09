const React = require('react');

const Button = require('../Button');

class CourseItem extends React.Component{

    render(){
        return (
            <div className='courseItem'>
                <header className='courseItem__header'>
                    <img className='courseItem__header-image' src={`images/${this.props.image}`} />
                </header>
                <div className='courseItem__details'>
                    <table className='courseItem__details-table'>
                    <tbody>
                        <tr>
                            <td colSpan='2'>
                                {this.props.title}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <i className='material-icons'> 
                                        person
                                    </i>
                                    <span>
                                        نام مدرس:
                                    </span>
                                </div>
                            </td>
                            <td>
                                {this.props.teacher}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <i className='material-icons'> 
                                        timer
                                    </i>
                                    <span>
                                        مدت زمان:
                                    </span>
                                </div>
                            </td>
                            <td>
                                {this.props.duration}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <i className='material-icons'> 
                                        event
                                    </i>
                                    <span>
                                        دپارتمان:
                                    </span>
                                </div>
                            </td>
                            <td>
                                {this.props.department}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <footer className='courseItem__footer'>
                    <Button target='_blank' smallPaddingTop={true} className='courseItem__footer-button' href={this.props.link} text='اطلاعات بیشتر و ثبت نام' />
                </footer>
            </div>
        );
    }

}

module.exports = CourseItem;