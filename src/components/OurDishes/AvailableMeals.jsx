import DishItems from './DishItems/DishItems';

import yam from '../../assets/yam-egg.webp';
import jollof from '../../assets/jollof-rice.webp';
import porridge from '../../assets/porridge-beans.webp';
import semo from '../../assets/semo-egusi.webp';
import amala from '../../assets/amala-ewedu.webp';
import eba from '../../assets/eba-okro.webp';

const DUMMY_MEALS = [
  {
    id: 'food-1',
    title: 'Yam & Egg Sauce',
    price: 1200,
    image: yam
  },
  {
    id: 'food-2',
    title: 'Jollof Rice',
    price: 2050,
    image: jollof
  },
  {
    id: 'food-3',
    title: 'Porridge Beans',
    price: 1100,
    image: porridge
  },
  {
    id: 'food-4',
    title: 'Semo and Egusi',
    price: 1800,
    image: semo
  },
  {
    id: 'food-5',
    title: 'Amala and Ewedu',
    price: 2400,
    image: amala
  },
  {
    id: 'food-6',
    title: 'Eba and Okro',
    price: 1350,
    image: eba
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(dishes => (
    <DishItems
      id={dishes.id}
      key={dishes.id}
      title={dishes.title}
      price={dishes.price}
      image={dishes.image}
    />
  ));

  return (
    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-16'>
      {mealsList}
    </div>
  );
};

export default AvailableMeals;
