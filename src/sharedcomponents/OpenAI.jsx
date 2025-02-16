import OpenAI from 'openai';
import { OPENAPI_KEY } from './Constant';

const token = OPENAPI_KEY;

const openAi = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: token,
  dangerouslyAllowBrowser : true
});

export default openAi;