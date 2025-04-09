
import Car from '../classes/Car';
import Truck from '../classes/Truck';
import Motorbike from '../classes/Motorbike';

interface AbleToTow {
  tow(vehicle: Truck | Motorbike | Car): void;
}

export default AbleToTow;
