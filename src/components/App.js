import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(data => setListings(data))
}, [])
// console.log(listings)
function deleteList(id){
  const updatedList = listings.filter(list => list.id !== id)
  setListings(updatedList)
}

function handleListFormSubmit(searchTerm){
  setSearchTerm(searchTerm)
}
// console.log(searchTerm)


const filteredList = listings.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <div className="app">
      <Header onListFormSubmit={handleListFormSubmit}  />
      <ListingsContainer onDeleteList={deleteList} listings={filteredList}  />
    </div>
  );
}

export default App;
