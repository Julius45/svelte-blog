///** @type {import('./$types').PageServerLoad} */
// export async function load() {
//     return {};
// };
// Form usage

import { fail } from "@sveltejs/kit";

export const actions = {
    default: async ({locals, request}) => {
        if (!locals?.user?.roles?.includes('admin')) {
            return fail(401, {errorMessage: 'Not authorized'});
        }
       //console.log('request', request);
        const formData = await request.formData();
        console.log('Form data', formData);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log(name, email, message);
        return {
            message: 'Form submitted',
        };
    }
};