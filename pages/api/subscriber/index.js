import nc from "next-connect";
import cors from "cors";
import mailServer from "@sendgrid/mail";

const handler = nc()
  .use(cors())
  .get(async (req, res) => {})

  .post(async (req, res) => {
    mailServer.setApiKey(process.env.EMAIL_KEY);
    console.log(req.body.name, "\t", req.body.email);
    const template = "d-a03acb185cac43a2b0a10f9ac097e98b";
    const msgToClient = {
      to: req.body.email,
      from: "hello@zede.tech",
      templateId: template,
    };

    try {
      const reply = await mailServer.send(msgToClient);
      console.log(reply);
      res.status(200).json({ message: "message sent" });
    } catch (error) {
      console.log(error.response.body);
      res.status(400).json({ message: "something went wrong", error: error });
    }
  });

export default handler;
