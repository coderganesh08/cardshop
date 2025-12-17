import React from 'react'

const cate = () => {

  const filterIteems = (category) => {
    const updatedList = menuData.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
}

    return (
    <div>
      <h1 onClick={Breakfast}>whats in ur mind</h1>
    </div>
  )
}

export default cate