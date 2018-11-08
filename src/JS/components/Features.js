const React = require('react');

const FeatureItem = require('./subComponents/FeatureItem');

class Features extends React.Component{

    render(){
        return (
            <section id='features' className='features'>
                <div className='features__container layout'>
                    <header className='features__header'>
                        <h2 className='features__header-title'>
                            ویژگی ها
                        </h2>
                        <div className='features__header-desc'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                        </div>
                    </header>
                    <div className='features__content'>
                        <div className='features__featuresWrapper'>
                            <FeatureItem title='ویژگی ۱' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ' icon='event' />
                            <FeatureItem title='ویژگی ۱' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ' icon='event' />
                            <FeatureItem title='ویژگی ۱' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ' icon='event' />
                            <FeatureItem title='ویژگی ۱' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ' icon='event' />
                        </div>
                        <div className='features__imageWrapper'>
                            <img src='dist/images/featuresImage.png' className='features__imageWrapper-image' />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

module.exports = Features;