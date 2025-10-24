import Vapi from '@vapi-ai/web';

const vapiKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "";

export const vapi = new Vapi(vapiKey);
