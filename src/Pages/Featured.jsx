import SectionTitle from "./Shared Pages/SectionTitle";
import featuedImg from '../assets/home/featured.jpg'
import "./Feactured.css";



const Featured = () => {
    return (
        <div className="my-12 my-featured bg-fixed py-8 text-white">
            <section className="mt-5">
                <SectionTitle subheading={'Check it out'} heading={'FROM OUR MENU'}/>

                <div className="md:flex justify-center items-center gap-2 md:p-8 bg-black text-white bg-opacity-30">
                    <div>
                        <img src={featuedImg} alt="" className="md:p-12"/>
                    </div>
                    <div>
                        <p>March 20, 2023</p>
                        <h4 className="font-bold my-2">WHERE CAN I GET SOME?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-2">Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;