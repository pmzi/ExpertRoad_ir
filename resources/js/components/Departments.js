const React = require('react');

const DepartmentItem = require('./subComponents/DepartmentItem');

class Departments extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            departments: [],
            text:' ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
            slidesWidth: 1120,
            itemWidth: 350,
            current: 1,
            margin: 0,
            maxSlides: 1
        }
    }

    render(){
        return (
            <section id='departments' className='departments'>
                <div className='departments__container'>
                    <header className='departments__header layout'>
                        <h4 className='departments__header-title'>
                            دپارتمان ها
                        </h4>
                        <div className='departments__header-desc'>
                            {this.state.text}
                        </div>
                    </header>
                </div>
                <div className='departments__departmentsWrapper layout'>
                    <div className='departments__sliderWrapper'>
                        <div style={{width: `${this.state.slidesWidth}px`, transform: `translateX(${this.translate}px)`}} className='departments__slidesWrapper'>
                            {this.departments}
                        </div>
                    </div>
                    <div className='departments__sliderActions'>
                        <div onClick={this.prevSlide.bind(this)} className={`departments__sliderActions-arrow ${this.state.current == 1 ? 'departments__sliderActions-arrow--disabled' : ''}`}>
                            <i className='material-icons'>
                                keyboard_arrow_right
                            </i>
                        </div>
                        <div onClick={this.nextSlide.bind(this)} className={`departments__sliderActions-arrow ${this.state.current == this.state.maxSlides ? 'departments__sliderActions-arrow--disabled' : ''}`}>
                            <i className='material-icons'>
                                keyboard_arrow_left
                            </i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    get translate(){
        return (this.state.current-1)*(this.state.itemWidth + this.state.margin*2);
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

    resetSlideCount(){
        this.setState({
            current: 1
        })
    }

    componentDidMount(){
        this.fetchDepartments().then(this.changeSlidesWidth.bind(this))
        window.addEventListener('resize',this.changeSlidesWidth.bind(this))
    }

    fetchDepartments(){
        return new Promise((resolve, reject)=>{
            // gets data from the server
            this.setState({
                departments: [
                    {
                        image: 'Tech Road [without bg].png',
                        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
                        latinName: 'startup'
                    },
                    {
                        image: 'Tech Road [without bg].png',
                        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
                        latinName: 'tech'
                    },
                    {
                        image: 'Tech Road [without bg].png',
                        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
                        latinName: 'design'
                    },
                    {
                        image: 'Tech Road [without bg].png',
                        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
                        latinName: 'game'
                    }
                ]
            })
            resolve();
        })
    }

    get departments(){
        let departments = [];
        for(let departmentItem of this.state.departments){
            departments.push(<DepartmentItem margin={this.state.margin} key={departmentItem.latinName} link={departmentItem.latinName} image={departmentItem.image}>{departmentItem.text}</DepartmentItem>)
        }
        return departments;
    }

    changeSlidesWidth(){
        let innerWidth = window.innerWidth > 1160 ? 1120 : window.innerWidth-40;
        let itemCount = parseInt(innerWidth / this.state.itemWidth);
        let margin = (innerWidth - itemCount*this.state.itemWidth)/(itemCount*2);
        let slidesWidth = (this.state.departments.length * this.state.itemWidth)+(margin * (this.state.departments.length*2));
        let maxSlides = (this.state.departments.length - itemCount)+1;
        this.setState({
            slidesWidth,
            margin,
            maxSlides
        })
        this.resetSlideCount();
    }

}

module.exports = Departments;