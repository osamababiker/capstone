import DishOne from '../../../icons_assets/greek salad-min.jpg';
import DishTwo from '../../../icons_assets/lemon dessert-min.jpg';
import TruckIcon from '../../../icons_assets/delivery-truck.png';
import DishThree from '../../../icons_assets/restauranfood-min.jpg';

function Dishes() {
  return (
    
    <section id="dishes">
    <div className="dishes-header">
        <h1>Specials Dishes</h1>
    </div>
    <div className="dishes-card">
        <div className="dish">
            <img src={DishOne} alt="Dish One" />
            <div className="dish-content">
                <h1>Salat</h1>
                <p>30 AED</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic</p>
            </div>
            <div className="dish-delivary">
                <span>Order for delivery</span>
                <img src={TruckIcon} alt="Truck Icon" /> 
            </div>
        </div>
        <div className="dish">
            <img src={DishTwo} alt="Dish Two" />
            <div className="dish-content">
                <h1>lemon dessert</h1>
                <p>30 AED</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic</p>
            </div>
            <div className="dish-delivary">
                <span>Order for delivery</span>
                <img src={TruckIcon} alt="Truck Icon" /> 
            </div>
        </div>
        <div className="dish">
            <img src={DishThree} alt="Dish Three" />
            <div className="dish-content">
                <h1>Salat</h1>
                <p>30 AED</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic</p>
            </div>
            <div className="dish-delivary">
                <span>Order for delivery</span>
                <img src={TruckIcon} alt="Truck Icon" /> 
            </div>
        </div>
    </div>
</section>
  )
}

export default Dishes