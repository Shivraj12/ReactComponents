import React, { useState, useEffect } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState([]); // Store the list of items
  const [page, setPage] = useState(1); // Track the current page for fetching items
  const [loading, setLoading] = useState(false); // Loading state

  // Function to simulate fetching data
  const fetchItems = async (pageNumber) => {
    setLoading(true); // Set loading to true while fetching
    // Simulating an API call
    const newItems = Array.from(
      { length: 10 },
      (_, index) => `Item ${(pageNumber - 1) * 10 + index + 1}`
    );
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...newItems]); // Append new items to the list
      setLoading(false); // Set loading to false
    }, 1000);
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    fetchItems(page);
  }, [page]);

  // Handle scroll event
  const handleScroll = () => {
    // Check if the user scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1); // Increment the page number to fetch new items
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Infinite Scroll</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {loading && <p>Loading more items...</p>}
    </div>
  );
}

export default InfiniteScroll;
