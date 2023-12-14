export const prerender = 'auto';

import { createClient} from '$lib/prismicio';

/** @type {import('./types').PageServerLoad} */
export async function load() {
    const client = createClient();

    const nav = await client.getSingle('nav');
    const settings = await client.getSingle('settings');
    
    return {
        nav,
        settings,
    };
}
