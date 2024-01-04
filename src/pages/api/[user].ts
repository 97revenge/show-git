import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user } = req.query;
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();

  res.status(201).json({ data });
}
