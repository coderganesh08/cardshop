import React, { useState } from 'react';
import Menu from './menuApi';
import Menucard from './menucard';
import img1 from './assets/burger.jpeg';
const Card = () => {
  const [menuData] = useState(Menu);
  console.log(menuData);

  return (
    <>
      <Menucard menuData={menuData}/>
    </>
  );
};

export default Card;