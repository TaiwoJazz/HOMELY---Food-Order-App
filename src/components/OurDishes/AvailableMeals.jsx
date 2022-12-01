import React, { useEffect, useState } from 'react';

import DishItems from './DishItems/DishItems';
// import yam from '../../assets/yam-egg.webp';
// import jollof from '../../assets/jollof-rice.webp';
// import porridge from '../../assets/porridge-beans.webp';
// import semo from '../../assets/semo-egusi.webp';
// import amala from '../../assets/amala-ewedu.webp';
// import eba from '../../assets/eba-okro.webp';

// const DUMMY_MEALS = [
//   {
//     id: 'food-1',
//     title: 'Yam & Egg Sauce',
//     price: 1200,
//     image: yam
//   },
//   {
//     id: 'food-2',
//     title: 'Jollof Rice',
//     price: 2050,
//     image: jollof
//   },
//   {
//     id: 'food-3',
//     title: 'Porridge Beans',
//     price: 1100,
//     image: porridge
//   },
//   {
//     id: 'food-4',
//     title: 'Semo and Egusi',
//     price: 1800,
//     image: semo
//   },
//   {
//     id: 'food-5',
//     title: 'Amala and Ewedu',
//     price: 2400,
//     image: amala
//   },
//   {
//     id: 'food-6',
//     title: 'Eba and Okro',
//     price: 1350,
//     image: eba
//   }
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://food-order-app-d4ff6-default-rtdb.firebaseio.com/availableMeals.json'
      );

      if (!response.ok) {
        throw new Error(
          'Something went wrong. Could not fetch available meal!'
        );
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          image: responseData[key].image
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((dishes) => (
    <DishItems
      id={dishes.id}
      key={dishes.id}
      title={dishes.title}
      price={dishes.price}
      image={dishes.image}
    />
  ));

  if (isLoading) {
    return (
      <section className='flex items-center justify-center text-2xl'>
        <p>Fetching Data, please wait...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className='flex items-center justify-center text-2xl max-w-[22rem] text-center mx-auto'>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-16'>
      {mealsList}
    </div>
  );
};

export default AvailableMeals;
