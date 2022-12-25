import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Home.css"

const Home = () => {
  const navigate = useNavigate()
  const documents =[
   {
    id:"01",
    name:" Sample-Document1",
    data:"https://arxiv.org/pdf/2212.08011.pdf"
   },
   {
    id:"02",
    name:" Sample-Document2",
    data:"https://arxiv.org/pdf/2212.07937.pdf"
   },
   {
    id:"01",
    name:" Sample-Document3",
    data:"https://arxiv.org/pdf/2212.07931.pdf"
   }
  ];

  const handleClick = document =>{
    navigate(`/DocumentPage/:${document.name}`, {state:document})

  }
    return (
        <div>
          <h5> Documents </h5>
          <hr />
          <ul className=' Documents'>
            {
              documents?.map(document =>{
                const {id, name, data} = document
                return <div onClick={()=>handleClick(document)} className='link'>{name}</div>
              })
            }
          </ul>
        </div>
    );
};

export default Home;