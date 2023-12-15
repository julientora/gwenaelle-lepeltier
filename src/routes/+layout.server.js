export const prerender = 'auto';

import { createClient} from '$lib/prismicio';

/** @type {import('./types').PageServerLoad} */
export async function load({ params }) {
    const client = createClient();

    const page = await client.getByUID('page', params.uid ? params.uid : 'home');
    const nav = await client.getSingle('nav');
    const settings = await client.getSingle('settings');
    
    return {
        page,
        nav,
        settings,
    };
}
