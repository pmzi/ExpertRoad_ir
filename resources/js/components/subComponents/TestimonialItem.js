const React = require('react');

class TestimonialItem extends React.Component{

    render(){
        return (<div ref='testimonialItem' className={`testimonialItem${this.props.className ? ' '+this.props.className : ''}`}>
            <div className='testimonialItem__text'>
                {this.props.text}
            </div>
            <div className='testimonialItem__name'>
                {this.props.name}
            </div>
            <div className='testimonialItem__avatar'>
                <img className='testimonialItem__avatar-image' src={`images/${this.props.avatar}`} />
            </div>
        </div>);
    }

}

module.exports = TestimonialItem;