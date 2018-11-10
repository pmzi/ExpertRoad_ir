const React = require('react');

const axios = require('axios');

const Input = require('./Input');
const Button = require('./Button');

class Subscribe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            submitted: false,
            beinSubmitted: false
        }
    }

    render(){
        return (
            <section id='subscribe' className='subscribe'>

                <div className='subscribe__container layout'>
                    <header className='subscribe__header'>
                        <h2 className='subscribe__header-title'>
                            عضویت در خبرنامه
                        </h2>
                    </header>
                    <div className='subscribe__content'>
                        <Input isError={this.state.hasError} ref='input' placeholder='me@example.com' type='email' />
                        <Button disabled={this.state.beingSubmitted || this.state.submitted ? true:false} onClick={this.subscribe.bind(this)} text={this.buttonText} />
                    </div>
                </div>

            </section>
        );
    }

    subscribe(){
        let email = this.refs.input.refs.input.value.trim();
        if(email != ''){
            this.setState({
                hasError: false,
                beingSubmitted: true
            })
            // Making a request to server
            this.subscribeToServer(email).then((data)=>{
                if(data.status == 1){
                    this.setState({
                        beingSubmitted: false,
                        submitted: true
                    })
                }else{
                    this.setState({
                        beingSubmitted: false,
                        hasError: true
                    })
                }
            }).catch(()=>{
                this.setState({
                    beingSubmitted: false,
                    hasError: true
                })
            })
            
        }else{
            this.setState({
                hasError: true
            })
        }
    }

    subscribeToServer(email){
        return axios.post('api/subscribe',{email});
    }

    get buttonText(){
        if(this.state.beinSubmitted){
            return 'در حال عضویت...';
        }else if(this.state.submitted){
            return 'با موفقیت انجام شد';
        }else{
            return 'عضویت';
        }
    }

}

module.exports = Subscribe;