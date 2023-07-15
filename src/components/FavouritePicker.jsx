import React from 'react';
import NameCard from './NameCard';

const FavPicker = ({favourites, removeFavs}) => {
    return ( 
        <div className="fav-container">
            <div className="name-container">
            {favourites
            .sort((a,b) => a.name.localeCompare(b.name))
            .map((name) => {
                return (
                    <NameCard key={name.id} data={name} handleClick={removeFavs} />
                )
            })
            }
            </div>
        </div>

     );
}
 
export default FavPicker;
