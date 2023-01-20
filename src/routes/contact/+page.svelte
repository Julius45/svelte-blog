<script>
	import { enhance } from '$app/forms';
    import { applyAction, deserialize } from '$app/forms';
    import {invalidateAll} from '$app/navigation';

    /** @type {import('./$types').PageData} */
    export let data;
    export let form;
    $: console.log(form);


    // Standard onSubmit event
    async function handleForm(event){
        // this === the form element
        // creating form data
        const data = new FormData(this);
        // sending our own fetch request to the action or url 
        const res = await fetch(this.action, {
            method: 'POST', // needs to be POST
            body: data  // needs to be FormData
        });
        // Get data by deserializing the response
        const result = deserialize(await res.text());

        // if the result is a success, reload all loaded data
        if(result.type === 'success'){
            // reloads all data
            await invalidateAll();
        }
        // populating form 
        // will redirect if thrown redirect in action
        // will show error message if thrown error in action
        applyAction(result);
    }

</script>


{#if form?.errorMessage}
    <p>
        {form.errorMessage}
    </p>
{/if}

{#if form?.message}
    <p>
        {form.message}
    </p>

{:else}

<form method="POST" action="/contact?/email" use:enhance={(form,data, action, cancel)=> {
    // form is the form element (this of the form)
    // data is  FormData object
    // action is url form posts to
    // cancel() is a function to cancel the form submission
    return ({result, update}) =>{
        update(); // runs all of the default use:enhance
        // result is 'ActionResult' (success, error, redirect)
        // update() runs all of the default use:enhance
    };
}}>
    <label>
        Name: <input type="text" name="name" id="nameID" required/>
    </label>

    <label>
        Email: <input type="email" name="email" id="email" required/>
    </label>
    
    <label>
        Message: <textarea name="message" id="messageID" required/>
    </label>

    <button type="submit">Send Email</button>

</form>

<form on:submit|preventDefault={handleForm} action="/contact?/email">
    <label>
        Name: <input type="text" name="name" id="nameID" required/>
    </label>

    <label>
        Email: <input type="email" name="email" id="email" required/>
    </label>
    
    <label>
        Message: <textarea name="message" id="messageID" required/>
    </label>

    <button type="submit">Send Email</button>

</form>





{/if}

<style>
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
    }
    label{
        display: block;
    }

</style>