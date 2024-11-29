import react, { useReact, useEffect, useState } from "react";

function SearchWithDebounce() {
  const [query, setQuery] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(query);
    }, 2000);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debounce) {
      console.log("API data fetch on search");
    }
  }, [debounce]);

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          type="text"
        />
      </div>
    </>
  );
}

export default SearchWithDebounce;
