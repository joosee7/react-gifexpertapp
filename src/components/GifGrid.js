import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]); // Con useEffect hacemos que el componente solo se renderice una vez

    return (
        <>
        <h3> { category }</h3>
        
        { loading && <img 
            alt="Loading"
            className="animate__animated animate__flash" 
            src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=dd3a43a138jukhp2hg1vjeniq2h59971vmgqawug7bfkaoyp&rid=giphy.gif&ct=g">
                </img> }
                

        <div className="card-grid">
            {
                images.map( img  => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
               ))
            }
        </div>
        </>
    )
};


