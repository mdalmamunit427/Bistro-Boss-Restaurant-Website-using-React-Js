/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "./Shared Pages/SectionTitle";
import { key } from "localforage";
import MenuItem from "./MenuItem";



const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data?.filter (items => items.category === 'popular')
            // console.log(popularItems);
            setMenu(popularItems);
        })
    }, [])

    console.log(menu);
    return (
        <section>
            <SectionTitle 
            subheading='Check it out'
            heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="md:grid grid-cols-2 gap-5">
                {
                   menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="w-full mx-auto text-center my-5">
            <button className="btn btn-outline border-0 border-b-2">View Full  Menu</button>
            </div>

            <div className="bg-black my-12">
                <h4 className="py-20 text-center text-3xl text-white">Call Us: +88 0192345678910</h4>
            </div>
        </section>
    );
};

export default PopularMenu;