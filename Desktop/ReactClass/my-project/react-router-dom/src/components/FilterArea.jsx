import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    searchParams.set("aramaTerimi", e.target[0].value);

    setSearchParams(searchParams);
  };
  const handleChange = (e) => {
    searchParams.set("sırala", e.target.value);
    console.log(e);
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-3 d-flex gap-3 align-content-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          className="form-control"
          type="text"
          placeholder="aratılacak metin..."
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
