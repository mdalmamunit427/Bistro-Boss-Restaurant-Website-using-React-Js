
import Banner from './Banner';
import Banner2 from './Banner2';

import Category from './Category';
import Featured from './Featured';
import PopularMenu from './PopularMenu';
import Recommend from './Recommend';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Banner2/>
            <PopularMenu/>
            <Recommend/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;