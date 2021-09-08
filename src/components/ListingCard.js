import React, {useState} from "react";

function ListingCard({id, description, image, location, onDeleteList}) {
  const [liked, setLiked] = useState(false)
  // console.log(id)
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method:"DELETE"
    })
    onDeleteList(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={() => setLiked(liked => !liked)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setLiked(liked => !liked)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
