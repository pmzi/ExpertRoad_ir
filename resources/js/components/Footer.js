const React = require('react');

class Footer extends React.Component{
    render(){
        return (<footer className='footer'>
            <div className='footer__container layout'>
                <div className='footer__links'>
                    <a href='/' className='footer__links-link'>
                        صفحه اصلی
                    </a>
                    -
                    <a href='/blog' className='footer__links-link'>
                        وبلاگ
                    </a>
                </div>
                <div className='footer__copyRight'>
                    تمامی حقوق برای اکسپرت رود محفوظ است
                </div>
                <div className='footer__brandName'>
                    Expert <span className='highlight'>
                        Road
                    </span>
                </div>
            </div>
        </footer>);
    }
}

module.exports=  Footer;