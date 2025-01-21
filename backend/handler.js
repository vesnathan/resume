/* eslint-disable no-console */
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

export const sendEmail = async (event) => {
  const data = JSON.parse(event.body);
  try {
    const sesIdentityArn = process.env.SESIdentityArn;
    if (!sesIdentityArn) {
      throw new Error("SES Identity ARN is not configured in the environment.");
    }

    console.log("SES Identity ARN:", sesIdentityArn);

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ["vesnathan+dev@gmail.com"],
      },
      Message: {
        Body: {
          Text: { Data: data.message },
        },
        Subject: { Data: "Resume Email" },
      },
      Source: "vesnathan+dev@gmail.com",
      ReplyToAddresses: [data.fromAddress],
    });

    const response = await ses.send(command);
    console.log("SES Response:", response);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully.",
        response,
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: false,
        message: "Failed to send email.",
        error: error.message,
      }),
    };
  }
};
