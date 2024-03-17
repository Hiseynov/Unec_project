import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DateComponent = ({ dates }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 7;
  const [index,setindex] = useState(0)
  const displayDates = () => {
    return dates.slice(startIndex, startIndex + itemsPerPage).map((date,index) => (
        <Link key={index} to={`${date.id}`} className="News-item">
        <div className="News-item-img">
          <img src={date.url}alt="News" />
        </div>
        <div className="News-item-word">
          <h3>{date.logo}</h3>
          <p>{date.text}</p>
          <span>{date.data}</span>
        </div>
        
      </Link>
    ));
  };

  const createButtons = () => {
    const totalPages = Math.ceil(dates.length / itemsPerPage);
    const buttons = [];

    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button  className={`${index == i?'activeButton':""} Blog-Button-item `} key={i} onClick={() => (setStartIndex(i * itemsPerPage),setindex(i))}>
          {i + 1}
          {
            console.log(index)
          }
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='Blog-container-item'>
      <div className='News-container-categories'>{displayDates()}</div>
      <div id="buttonContainer" className='Blog-Button'>{createButtons()}</div>
    </div>
  );
};

export default DateComponent;