<script>
	import { enhance } from '$app/forms';


    /** @type {import('./$types').PageData} */
    export let data;
    export let form;
    $: console.log(form);


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

<form method="POST" use:enhance>
    <label>
        Name: <input type="text" name="name" id="nameID" required/>
    </label>

    <label>
        Email: <input type="email" name="email" id="emailID" required/>
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