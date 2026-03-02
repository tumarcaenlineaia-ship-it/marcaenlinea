export async function getPosts() {
  const res = await fetch(import.meta.env.VITE_API_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        {
          posts {
            nodes {
              title
              content
            }
          }
        }
      `
    })
  });

  const json = await res.json();
  return json.data.posts.nodes;
}