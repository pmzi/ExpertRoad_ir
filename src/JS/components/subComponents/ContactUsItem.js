const React = require('react');

class ContactUsItem extends React.Component{

    render(){
        return (<div className={`contactUsItem ${this.props.className?this.props.className:''}`}>
            <i className='material-icons contactUsItem__icon'>
                {this.props.icon}
            </i>
            <span className='contactUsItem__text'>
                {this.props.text}
            </span>
        </div>);
    }

}

module.exports = ContactUsItem;