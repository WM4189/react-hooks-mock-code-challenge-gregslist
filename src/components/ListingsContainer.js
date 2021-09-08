import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteList}) {
  // console.log(listings)
  const listCard = listings.map(list =>{
    return(
      <div key={list.id}>
      <ListingCard id={list.id} onDeleteList={onDeleteList} description={list.description} image={list.image} location={list.location} />
      </div>
    )
  })
  return (
    <main>
      <ul className="cards">
        {listCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
