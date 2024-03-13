
import './Bottle.css'
const Bottle = ({bottle, handleAddCart}) => {
    console.log(bottle)
    const {name,id,price}=bottle;
    return (
        <div className='box'>
            <h3>Name :{name}</h3>
            <p>Id : {id}</p>
            <p>Price : {price}</p>
            <button onClick={() => handleAddCart(bottle)}>Purchase</button>
        </div>
    );
};
export default Bottle;