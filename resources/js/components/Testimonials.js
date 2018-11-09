const React = require('react');

const TestimonialItem = require('./subComponents/TestimonialItem');

class Testimonials extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            testimonials: [],
            slideWidth: 1120,
            slidesWidth: 1120,
            current: 1
        }
    }

    render(){
        return (
            <section id='testimonials' className='testimonials'>
                <div className='testimonials__container layout'>
                    <header className='testimonials__header'>
                        <h2 className='testimonials__header-title'>
                            نظرات کاربران
                        </h2>
                    </header>
                    <div ref='sliderWrapper' className='testimonials__sliderWrapper'>
                        <div ref='slidesWrapper' className='testimonials__slidesWrapper'>
                            {this.testimonials}
                        </div>
                    </div>
                    <div className='testimonials__actions'>
                        <div onClick={this.prevSlide.bind(this)} className={`testimonials__actions-arrow${this.state.current == 1 ? ' testimonials__actions-arrow--disabled' : ''}`}>
                            <i className='material-icons'>
                                keyboard_arrow_right
                            </i>
                        </div>
                        <div onClick={this.nextSlide.bind(this)} className={`testimonials__actions-arrow${this.state.current == this.state.testimonials.length ? ' testimonials__actions-arrow--disabled' : ''}`}>
                            <i className='material-icons'>
                                keyboard_arrow_left
                            </i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    nextSlide(){
        
        let current = this.state.current;
        current++;
        this.setState({
            current
        })
    }

    prevSlide(){
        let current = this.state.current;
        current--;
        this.setState({
            current
        })
    }

    componentDidMount(){
        this.fetchTetsimonials().then(()=>{
            this.changeTestimonialsWidth();
        })
        window.addEventListener('resize',this.changeTestimonialsWidth.bind(this))
        // this.refs.sliderWrapper.onresize = ;
    }

    fetchTetsimonials(){
        return new Promise((resolve, reject)=>{
            // This should make a request to server

            this.setState({
                testimonials:[{
                    id: 1,
                    name: 'عرفان یزدپور',
                    text: 'کمی متن من مینویسم من',
                    avatar: 'avatar-sample.jpg'
                },
                {
                    id: 2,
                    name: 'احسان میرهاشمی',
                    text: 'کمی متن من مینویسم من',
                    avatar: 'avatar-sample.jpg'
                }]
            })
            resolve();
        })
    }

    get testimonials(){
        let testimonials = [];
        for(let testimonialItem of this.state.testimonials){
            testimonials.push(<TestimonialItem key={testimonialItem.id} text={testimonialItem.text} name={testimonialItem.name} avatar={TestimonialItem.avatar ? testimonialItem.avatar : 'avatar-sample.jpg'} />);
        }
        return testimonials;
    }

    changeTestimonialsWidth(){
        
        let innerWidth = window.innerWidth > 1160 ? 1120 : window.innerWidth-40;
        let length = this.state.testimonials.length;
        this.setState({
            slidesWidth: innerWidth*length,
            slideWidth: innerWidth
        })
    }

    componentDidUpdate(){
        this.refs.slidesWrapper.style.width = this.state.slidesWidth + 'px';
        this.refs.slidesWrapper.style.transform = `translateX(${(this.state.current-1) * this.state.slideWidth}px)`;
    }

}

module.exports = Testimonials;