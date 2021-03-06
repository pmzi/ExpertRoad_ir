const React = require('react');

class Button extends React.Component{

    get button(){

        let button;

        if(this.props.href){

            button = <a target={this.props.target?this.props.target:'_self'} href={this.props.href} className={`button ${this.props.isFilled ? 'button--filled' : ''} ${this.props.className?this.props.className:''} ${this.props.disabled?'button--disabled':''}`}>
                {this.props.text}
            </a>

            return button; 

        }

        button = <button onClick={this.props.onClick} className={`button ${this.props.isFilled ? 'button--filled' : ''} ${this.props.smallPaddingTop ? 'button--smallPaddingTop' : ''} ${this.props.className?this.props.className:''} ${this.props.disabled?'button--disabled':''}`}>
            {this.props.text}
        </button>

        return button; 

    }

    render(){
        return (
            <React.Fragment>
                {this.button}
            </React.Fragment>
        );
    }

}

module.exports = Button;