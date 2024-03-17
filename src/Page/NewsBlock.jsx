import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dates } from '../data/data'

function NewsBlock() {
  const {id} =useParams()
  // console.log(dates.filter((item)=>item.id ==id));
  const [data,setData] = useState(dates.filter((item)=>item.id ==id))
  console.log(data);
  return (
   <>
      <div className="NewsBlock">
        <div className="NewsBlock-container">
          <h2>Contract filling – your entry into the market</h2>
          <div className="NewsBlock-item">
            {
              data.map((item,id)=>(
                <>
                    <div key={id} className="NewsBlock-item-photo">
                      <img src={item.url} alt="" />
                    </div>
                    <div className="NewsBlock-item-word">
                      <h3>{item.logo}</h3>
                      <p>{item.text}</p>
                      <p>{item.title}</p>
                    </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
   </>
  )
}

export default NewsBlock