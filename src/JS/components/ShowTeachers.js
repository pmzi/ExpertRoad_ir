const React = require('react');

const Button = require('./Button');

class ShowTeachers extends React.Component{

    render(){
        return (
            <section id='teachers' className='showTeachers'>
                <div className='showTeachers__container layout'>
                    <header className='showTeachers__header'>
                        <h2 className='showTeachers__header-title'>
                            اساتید
                        </h2>
                    </header>
                    <div className='showTeachers__content'>
                        <p className='showTeachers__content-desc'>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    {/* <div className='showTeachers__actions'>
                            <Button href='#' text='مشاهده اساتید' />
                    </div> */}
                </div>
            </section>
        );
    }

}

module.exports = ShowTeachers;