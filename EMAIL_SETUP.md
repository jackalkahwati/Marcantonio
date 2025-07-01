# Email Setup for Contact Form

The contact form uses Brevo (formerly SendinBlue) to send emails. Follow these steps to configure it:

## 1. Create a Brevo Account

1. Go to [Brevo](https://app.brevo.com/) and create a free account
2. Complete the account verification process

## 2. Get Your API Key

1. Log in to your Brevo dashboard
2. Go to **Settings** → **API Keys** or visit: https://app.brevo.com/settings/keys/api
3. Click **Generate a new API key**
4. Give it a name like "Marcantonio Global Website"
5. Copy the generated API key

## 3. Configure Environment Variable

1. Open the `.env.local` file in your project root
2. Replace `your_brevo_api_key_here` with your actual API key:
   ```
   BREVO_API_KEY=your_actual_api_key_here
   ```

## 4. Verify Sender Domain (Important!)

For the emails to be sent successfully, you need to verify your domain:

1. In Brevo, go to **Settings** → **Senders & IP**
2. Add and verify the domain `marcantonioglobal.com`
3. Follow Brevo's domain verification instructions

## 5. Test the Contact Form

1. Restart your development server: `npm run dev`
2. Go to the contact page: `/about/contact`
3. Fill out and submit the form
4. Check the browser's developer console for any error messages
5. Check your email inbox for the submitted message

## Troubleshooting

### Common Issues:

1. **"Email service not configured"** - The API key is missing or set to the placeholder value
2. **"Email service authentication failed"** - The API key is incorrect
3. **"Email service configuration error"** - The sender domain is not verified

### Checking Logs:

- Open browser developer tools (F12) and check the Console tab for error messages
- Check the Network tab to see if the API request is being made successfully

### Alternative Email Services:

If you prefer to use a different email service, you can modify the `/src/app/api/contact/route.ts` file to use:
- SendGrid
- Mailgun
- Amazon SES
- Gmail SMTP

## Production Deployment

When deploying to Vercel or another platform:

1. Add the `BREVO_API_KEY` environment variable in your deployment platform's settings
2. Make sure the sender domain is verified in your Brevo account
3. Test the contact form on the live site

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your API key secure and don't share it publicly
- Regularly rotate your API keys for security 