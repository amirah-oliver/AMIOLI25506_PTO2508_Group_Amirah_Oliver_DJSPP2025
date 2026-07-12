function SortDropdown({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="updated">Recently Updated</option>
      <option value="title">A-Z</option>
      <option value="seasons">Most Seasons</option>
    </select>
  );
}

export default SortDropdown;