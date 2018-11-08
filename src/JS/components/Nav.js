const React = require('react');

class Nav extends React.Component{

    render(){
        return (<nav className='nav'>
            <div className='nav__socials'>
                <a href='#' className='nav__singleSocial nav__singleSocial--twitter'>
        
                </a>
                <a href='#' className='nav__singleSocial nav__singleSocial--instagram'>
        
                </a>
                <a href='#' className='nav__singleSocial nav__singleSocial--telegram'>
        
                </a>
            </div>
            <div className='nav__menu'>
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

}

module.exports = Nav;