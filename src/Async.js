import React, { useEffect, useState } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return data;
    }

    const data = fetchData();
    data.then((response) => {
      setPosts(response);
      console.log(posts);
    });
  }, []);

  return (
    <div>
      <h1>Async</h1>
      {posts.length}
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
