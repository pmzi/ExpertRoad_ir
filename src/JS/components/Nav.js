const React = require('react');

class Nav extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            menuItems: 8,
            menuHeight: 4,
            style: {

            },
            socials: {
                telegram: '#',
                instagram: '#',
                twiiter: '#'
            }
        }
    }

    render(){
        return (<nav className='nav'>
            <div onClick={this.handleMenuShow.bind(this)} className='nav__collapse'>
                <i className='material-icons'>
                    dehaze
                </i>
            </div>
            <div className='nav__socials'>
                <a href={this.state.socials.twiiter} target='_blank' className='nav__singleSocial nav__singleSocial--twitter'>
        
                </a>
                <a href={this.state.socials.instagram} target='_blank' className='nav__singleSocial nav__singleSocial--instagram'>
        
                </a>
                <a href={this.state.socials.telegram} target='_blank' className='nav__singleSocial nav__singleSocial--telegram'>
        
                </a>
            </div>
            <div style={this.state.style} className={`nav__menu${this.state.showMenu ? ' nav__menu--show' : ''}`}>
                <div className='nav__menuItem'>
                    <a href='#'>
                        خانه
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#aboutUs'>
                        درباره ما
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#features'>
                        ویژگی ما
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#courses'>
                        دوره‌ها
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#departments'>
                        دپارتمان‌ها
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#teachers'>
                        اساتید
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#testimonials'>
                        نظرات کاربران
                    </a>
                </div><div className='nav__menuItem'>
                    <a href='#contactUs'>
                        تماس با ما
                    </a>
                </div>
            </div>
            <div className='nav__logo'>
                <img src='' alt='Logo' />
            </div>
        </nav>);
    }

    componentDidMount(){
        window.addEventListener('resize',this.hideMenu.bind(this))
    }

    handleMenuShow(){
        let showMenu = !this.state.showMenu;
        let style = {};
        if (showMenu){
            style['height'] = this.state.menuItems*this.state.menuHeight+'rem';
        }
        this.setState({
            showMenu,
            style
        })
    }

    hideMenu(){
        this.setState({
            showMenu: false
        })
    }

}

module.exports = Nav;