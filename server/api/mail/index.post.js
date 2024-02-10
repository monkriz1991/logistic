import nodemailer from "nodemailer";
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  host: config.MAILHOST,
  port: config.MAILPORT,
  auth: {
    user: config.MAILUSER,
    pass: config.MAILPASSWORD,
  },
});

export default defineEventHandler(async (event, response) => {
  try {
    const body = await readBody(event);

    const mail = {
      form: `"${body.username}"`,
      to: config.CONTACTMAIL,
      subject: body.username,
      text: body.username,
      html: `Заказчик:${body.username} Телефон:${body.phone} Тип груза:${body.type} Размер:${body.size} Откуда:${body.from} Куда:${body.to}`,
    };
    await transporter.sendMail(mail);
  } catch (event) {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: error,
      })
    );
  }
});
