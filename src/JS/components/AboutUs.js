const React = require('react');

const Button = require('./Button');

class AboutUs extends React.Component{

    render(){
        return (
            <section className='aboutUs'>

                <div className='aboutUs__container'>

                    <div className='aboutUs__contentWrapper'>

                        <h2 className='aboutUs__heading'>
                            درباره ما
                        </h2>
                        
                        <p className='aboutUs__content'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
                        </p>

                    </div>
                    <div className='aboutUs__logoWrapper'>

                        <img className='aboutUs__logo' src='dist/images/logo-1.png' alt='Logo' />

                    </div>

                </div>

            </section>
        );
    }

}

module.exports = AboutUs;