const React = require('react');

const ContactUsItem = require('./subComponents/ContactUsItem');

class ContactUs extends React.Component{
    render(){
        return (<section className='contactUs'>
            <iframe className='contactUs__map' src={this.props.src} frameBorder="0" allowFullScreen></iframe>
            <div className='contactUs__container layout'>
                <div className='contactUs__contactInfo'>
                    <header className='contactUs__header'>
                        <h2 className='contactUs__header-title'>
                            تماس با ما
                        </h2>
                    </header>
                    <div className='contactUs__content'>
                        <ContactUsItem icon='event' text='ما اینجاییم کمک!!' className='contactUs__content-item' />
                        <ContactUsItem icon='event' text='ما اینجاییم کمک!!' className='contactUs__content-item' />
                        <ContactUsItem icon='event' text='ما اینجاییم کمک!!' className='contactUs__content-item' />
                        <ContactUsItem icon='event' text='ما اینجاییم کمک!!' className='contactUs__content-item' />
                    </div>
                </div>
            </div>
        </section>);
    }
}

module.exports = ContactUs; 