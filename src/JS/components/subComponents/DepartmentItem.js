const React = require('react');

class DepartmentItem extends React.Component{

    render(){
        return (<div className='department'>
            <header className='department__header'>
                <img src={`dist/images/${this.props.image}`} className='department__header-image' />
            </header>
            <div className='department__details'>
                <p className='department__details-desc'>
                    {this.props.children}
                </p>
            </div>
        </div>);
    }

}

module.exports = DepartmentItem;