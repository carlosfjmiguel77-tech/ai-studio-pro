import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { prompt } = req.body;
  const response = await openai.images.generate({ model:"gpt-image-1", prompt, size:"1024x1024" });
  res.status(200).json({ url: response.data[0].url });
}
