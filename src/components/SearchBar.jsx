const SearchBar = ({ onChange, value }) => {
    return (
      <input
        type="text"
        placeholder="Search videos..."
        value={value}
        onChange={onChange}
      />
    );
  };
  
  export default SearchBar;