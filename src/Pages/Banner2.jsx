import banner2 from '../assets/home/chef-service.jpg'
const Banner2 = () => {
    return (
        <div className='w-5/6 mx-auto text-center my-10 relative'>
            <img src={banner2} alt="" />
            <div className='bg-white md:absolute top-5 bottom-5 md:p-8 md:m-16'>
                <h2 className='uppercase font-bold my-4'>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Banner2;