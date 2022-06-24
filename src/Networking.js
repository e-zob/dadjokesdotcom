export async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  const json = await response.json();
  return json;
}
