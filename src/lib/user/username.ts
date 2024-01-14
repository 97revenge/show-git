namespace Props {
  export type username = string;
}

export default async function handler(username: Props.username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const status = response.status;
  const data = await response.json();

  return {
    data,
    status,
  };
}
