const React = require('react');

const FeatureItem = require('./subComponents/FeatureItem');

class Features extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            features: [
                {   id: 1,
                    title: 'ویژگی ۱',
                    text: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                    icon: 'event'
                },
                {
                    id: 2,
                    title: 'ویژگی ۱',
                    text: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                    icon: 'event'
                },
                {
                    id: 3,
                    title: 'ویژگی ۱',
                    text: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                    icon: 'event'
                },
                {
                    id: 4,
                    title: 'ویژگی ۱',
                    text: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                    icon: 'event'
                }
            ]
        }
    }

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
                            {this.features}
                        </div>
                        <div className='features__imageWrapper'>
                            <img src='images/featuresImage.png' className='features__imageWrapper-image' />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    get features(){
        let features = [];
        for(let featureItem of this.state.features){
            features.push(<FeatureItem key={featureItem.id} title={featureItem.title} desc={featureItem.text} icon={featureItem.icon} />)
        }
        return features;
    }

}

module.exports = Features;