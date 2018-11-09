const React = require('react');

const Button = require('./Button');

class AboutUs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            aboutUs: 'متن درباره ما'
        }
    }

    render(){
        return (
            <section id='aboutUs' className='aboutUs'>

                <div className='aboutUs__container layout'>

                    <div className='aboutUs__contentWrapper'>

                        <h2 className='aboutUs__heading'>
                            درباره ما
                        </h2>
                        
                        <p className='aboutUs__content'>
                            {this.state.aboutUs}
                        </p>

                    </div>
                    <div className='aboutUs__logoWrapper'>

                        <img className='aboutUs__logo' src='dist/images/logo-1.png' alt='Logo' />

                    </div>

                </div>

            </section>
        );
    }

}

module.exports = AboutUs;