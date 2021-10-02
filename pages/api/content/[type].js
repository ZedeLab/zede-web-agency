import cors from "cors";
import nc from "next-connect";

// Middelware

// Db
import { fetchContent } from "@zede-services/db";

const onError = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
};

const onNoMatch = (req, res, next) => {
  res.status(404).json({ message: "The requested endpoint is not supported." });
};
const handler = nc({ onNoMatch, onError })
  .use(cors())
  .get(async (req, res) => {
    const content = await fetchContent(req.query.type);

    res.status(200).json(content);
  });

export default handler;
