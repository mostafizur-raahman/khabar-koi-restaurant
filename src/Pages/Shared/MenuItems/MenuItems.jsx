

const MenuItems = ({item}) => {
    const {image,price,name,recipe} = item;
    console.log(image);
    return (
        <div className="flex space-x-4">
            <img src={image} style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" alt="Menu items" />
            <div>
                <h3 className="uppercase">{name}---------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItems;