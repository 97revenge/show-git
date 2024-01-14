namespace Props {
  export type username = string;
}

export default async function star(username: Props.username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/starred`,
    { cache: "force-cache", next: { revalidate: 3600 } }
  );

  const data = await response.json();

  return data;
}
