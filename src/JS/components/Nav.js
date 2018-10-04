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
                    <a href='#'>
                        درباره ما
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#'>
                        ویژگی ما
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#'>
                        دوره‌ها
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#'>
                        دپارتمان‌ها
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#'>
                        نظرات کاربران
                    </a>
                </div>
                <div className='nav__menuItem'>
                    <a href='#'>
                        اساتید
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