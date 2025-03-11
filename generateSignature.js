import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

const clientSecret = process.env.META_CLIENT_SECRET
const data = {
  event_name: 'Test Event',
}

async function generateSignature(data) {
  const timestamp = new Date().toISOString()

  const payload = JSON.stringify({
    data,
    timestamp
  })

  const signature = crypto
    .createHmac('sha256', clientSecret)
    .update(payload)
    .digest('hex')

  console.log('Generated Signature:', signature)
  console.log('Timestamp:', timestamp)
  console.log('Payload:', payload)
}

generateSignature(data)
