/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="md:flex space-x-5 my-5">
      <img style={{borderRadius:'0px 150px 150px 150px'}} src={image} alt="" className="w-[200px]" />
      <div>
        <h3 className="uppercase my-2">{name} ------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 my-2 font-bold">${price}</p>
    </div>
  );
};

export default MenuItem;
