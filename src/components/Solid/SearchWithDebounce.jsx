function SearchWithDebounce({ debounceDelay = 2000, apiCall }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, debounceDelay);

  useEffect(() => {
    if (debouncedQuery) {
      apiCall(debouncedQuery); // Injected dependency for API call
    }
  }, [debouncedQuery, apiCall]);

  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search here..."
      />
    </div>
  );
}

// Example of injected API call
const fetchApi = (query) => console.log(`Fetching data for: ${query}`);

export default function App() {
  return <SearchWithDebounce apiCall={fetchApi} debounceDelay={2000} />;
}
