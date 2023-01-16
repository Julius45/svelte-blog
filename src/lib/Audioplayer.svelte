<script>
    let AudioPlayer;
    let playing = false;
    let source;
    export let audiosrc;

    let togglePlay= () => {
        if (playing) {
            AudioPlayer.pause();
            
        } else {
            AudioPlayer.play();
        }
        playing = !playing;
    }
    $: source = audiosrc;
</script>

<audio bind:this={AudioPlayer}>
     <source src={source} type="audio/mpeg" />
</audio>

<button on:click={togglePlay}>Toggle Play </button>