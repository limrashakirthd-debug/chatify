import { Resend } from "resend";
import { ENV } from "./env.js";

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};



// deployment issue

// import { Resend } from "resend";
// import { ENV } from "./env.js";

// export function getResendClient() {
//   if (!ENV.RESEND_API_KEY) {
//     console.error("RESEND_API_KEY is missing!", ENV.RESEND_API_KEY);
//     throw new Error("Missing API key");
//   }
//   return new Resend(ENV.RESEND_API_KEY);
// }

// export const sender = {
//   email: ENV.EMAIL_FROM,
//   name: ENV.EMAIL_FROM_NAME,
// };
