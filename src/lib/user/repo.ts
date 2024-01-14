namespace Props {
  export type username = string;
}

export default async function repo(username: Props.username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  const data = await response.json();

  return data;
}
