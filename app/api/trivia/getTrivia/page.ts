import { getTrivia } from "@api";
import { NextApiRequest, NextApiResponse } from "next";

export const Trivia = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const trivia = await getTrivia(req, res);
    res.status(200).json(trivia);
  } catch (error) {
    res.status(500).json({
      error: getErrorMessage(error),
    });
  }
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};
