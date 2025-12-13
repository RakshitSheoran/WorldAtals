export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  function handleInputChange(event) {
    console.log(
      "This is the current value of the search field",
      event.target.value
    );
    setSearch(event.target.value);
  }
  function handleSelectChange(event) {
    console.log("Select Filter Value - ", event.target.value);
    setFilter(event.target.value);
  }
  function countrySort(value) {
    const sortedCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortedCountry);
  }
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        className="searchField"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />
      <div className="button-container">
        <button className="Ascending-button" onClick={() => countrySort("asc")}>
          Ascending
        </button>
        <button
          className="Descending-button"
          onClick={() => countrySort("dsc")}
        >
          Descending
        </button>
      </div>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}
