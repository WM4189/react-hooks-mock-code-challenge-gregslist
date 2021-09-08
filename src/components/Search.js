import React, {useState} from "react";

function Search({onListFormSubmit}) {
  const [input, setInput] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    onListFormSubmit(input)
    // setInput(input)
  }
  // onListFormSubmit(input)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">🔍</button>
    </form>
  );
}

export default Search;
