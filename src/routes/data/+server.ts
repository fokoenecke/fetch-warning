import type { RequestHandler } from '@sveltejs/kit';

const RESPONSE_TEXT = `please don't yell at me :(`;
export const GET: RequestHandler = async ({}) => {
	return new Response(JSON.stringify({ text: RESPONSE_TEXT }));
};

export const POST: RequestHandler = async ({}) => {
	return new Response(JSON.stringify({ text: RESPONSE_TEXT }));
};
