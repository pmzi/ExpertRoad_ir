const React = require('react');

const ContactUsItem = require('./subComponents/ContactUsItem');

class ContactUs extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            contactItems: [
                {
                    id: 1,
                    icon: 'event',
                    text: 'کمی متن'
                },
                {
                    id: 2,
                    icon: 'event',
                    text: 'کمی متن'
                },
                {
                    id: 3,
                    icon: 'event',
                    text: 'کمی متن'
                },
                {
                    id: 4,
                    icon: 'event',
                    text: 'کمی متن'
                }
            ]
        }
    }

    render(){
        return (<section id='contactUs' className='contactUs'>
            <iframe className='contactUs__map' src={this.props.src} frameBorder="0" allowFullScreen></iframe>
            <div className='contactUs__container layout'>
                <div className='contactUs__contactInfo'>
                    <header className='contactUs__header'>
                        <h2 className='contactUs__header-title'>
                            تماس با ما
                        </h2>
                    </header>
                    <div className='contactUs__content'>
                        {this.contactItems}
                    </div>
                </div>
            </div>
        </section>);
    }

    get contactItems(){
        let contactItems = [];
        for(let contactItem of this.state.contactItems){
            contactItems.push(<ContactUsItem key={contactItem.id} icon={contactItem.icon} text={contactItem.text} />)
        }
        return contactItems;
    }

}

module.exports = ContactUs; 