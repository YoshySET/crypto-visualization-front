import axios from 'axios';
import type {NextApiRequest, NextApiResponse} from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const {param1} = req.query;
    const result = await axios
      .get(`https://jwafb5a7qk.execute-api.ap-northeast-1.amazonaws.com/prod?param1=${param1}`)
      .then((response) => response.data);

    return res.status(200).json(result);
  }
}