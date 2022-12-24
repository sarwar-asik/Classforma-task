import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Document.css"

const DocumentPage = () => {
    const {state} = useLocation()
const {id, name ,data} = state;

    return (
        <div>
            <h1>{state.name}</h1>
            <div className="detail-container">
                <div className="">
                    <h3> Label </h3>
                    <hr />
                    <p>
                        <button className='btn-1'>Tittle</button>
                        <button className='btn-2'> Author</button>
                    </p>
                    
                </div>

            </div>
            
        </div>
    );
};

export default DocumentPage;