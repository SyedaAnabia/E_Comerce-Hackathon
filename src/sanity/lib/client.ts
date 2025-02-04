// client.ts
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: "vx34v9cf",
  dataset: "production",
  useCdn: true, // Use `false` to always fetch fresh data
  token: process.env.SANITY_API_TOKEN, // Securely use the token
});

export default client;
