import nc from "next-connect";
import cors from "cors";
import mailServer from "@sendgrid/mail";

const handler = nc()
  .use(cors())
  .get(async (req, res) => {})

  .post(async (req, res) => {
    mailServer.setApiKey(process.env.EMAIL_KEY);
    const msg = {
      to: "abelofficial94@gmail.com",
      from: "em2432@zede.tech",
      subject: "Server message.",
      text: "and easy to do anywhere",
      html: "<strong> whats up </strong>",
    };

    try {
      const reply = await mailServer.send(msg);
      console.log(reply);
      res.json({ message: "message sent" });
    } catch (error) {
      console.log(error);
      res.json({ message: "something went wrong" });
    }
  });

export default handler;
