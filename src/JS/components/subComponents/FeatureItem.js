const React = require('react');

class FeatureItem extends React.Component{

    render(){
        return (
            <div className={`featureItem${this.props.className ? ' '+this.props.className : ''}`}>
                <div className='featureItem__iconWrapper'>
                    <div className='featureItem__iconBorder'>
                        <i className='material-icons'>
                            {this.props.icon}
                        </i>
                    </div>
                </div>
                <div className='featureItem__details'>
                    <h4 className='featureItem__details-title'>
                        {this.props.title}
                    </h4>
                    <div className='featureItem__details-desc'>
                        {this.props.desc}
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = FeatureItem;