/**
 * Web3Forms configuration.
 * Replace YOUR_WEB3FORMS_ACCESS_KEY with the real key from https://web3forms.com
 * Replace destinationEmail with the client's actual email.
 *
 * Steps to activate:
 * 1. Go to https://web3forms.com and sign up (free).
 * 2. Enter the client's email → get an Access Key.
 * 3. Replace "YOUR_WEB3FORMS_ACCESS_KEY" below with the real key.
 * 4. Replace "cliente@pendiente.com" with the client's confirmed email.
 * 5. Run npm run build and deploy.
 * 6. Send a test submission and confirm receipt.
 */
export const contactConfig = {
  accessKey: "REDACTED",
  destinationEmail: "service@gyroadsidesolutions.com",
  web3FormsEndpoint: "https://api.web3forms.com/submit",
  formName: "GY Roadside Solutions — Contact Form",
  redirectUrl: "", // optional: URL to redirect after successful submission
};
