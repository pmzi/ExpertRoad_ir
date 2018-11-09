const React = require('react');

class DepartmentItem extends React.Component{

    render(){
        return (<div style={{marginRight:`${this.props.margin}px`,marginLeft:`${this.props.margin}px`}} ref='department' className='department'>
            <header className='department__header'>
                <img src={`images/${this.props.image}`} className='department__header-image' />
            </header>
            <div className='department__details'>
                <p className='department__details-desc'>
                    {this.props.children}
                </p>
            </div>
            <div className='department__action'>
                <a className='department__action-readMore' href={this.props.link}>مشاهده دوره ها و توضیحات...</a>
            </div>
        </div>);
    }

}

module.exports = DepartmentItem;