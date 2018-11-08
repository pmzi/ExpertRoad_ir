const React = require('react');

const Button = require('./Button');

class MainHeader extends React.Component{

    render(){
        return (<header className='mainHeader'>

            <div className='mainHeader__overlay'>
                <div className='mainHeader__caption'>
                    <h1 className='mainHeader__captionHeader'>
                        اکسپرت رود
                    </h1>
                    <h4 className='mainHeader__captionText'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </h4>
                    <div className='mainHeader__captionAction'>
                        <Button href='#' className='mainHeader__action' isFilled={true} text='مشاهده دوره‌ها' />
                        <Button href='#subscribe' className='mainHeader__action' isFilled={false} text='عضویت در خبرنامه' />
                    </div>
                </div>
            </div>

        </header>);
    }

}

module.exports = MainHeader;