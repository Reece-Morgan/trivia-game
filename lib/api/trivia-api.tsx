import { NextApiRequest, NextApiResponse } from "next";

export async function callTriviaRoute(endpoint: string) {
  const res = fetch(`/api/trivia/${endpoint}`);

  const response = (await res).json() as unknown;

  return response;
}

export const getTrivia = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await fetch(
    "https://opentdb.com/api.php?amount=10&category=20&difficulty=hard&type=multiple"
  );

  const response = await data.json();

  return response;
};
