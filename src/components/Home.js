import React, { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  console.log("data", data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item) => (
          <img
            src={item?.thumbnailUrl}
            alt=""
            style={{
              margin: "10px",
            }}
          />
        ))
      )}
    </div>
  );
}

export default Home;
