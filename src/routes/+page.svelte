<script lang="ts">
	let data: { text: string };

	const fetchDataByGET = () => {fetchData("GET")}
	const fetchDataByPOST = () => {fetchData("POST")}

	const fetchData = async (method: string = "GET") => {
		const response = await fetch('/data', {method} );
		data = await response.json();
	};

</script>

{#if data}
	<h3>{data.text}</h3>
{/if}

<button on:click={fetchDataByGET}>fetch data (GET)</button>
<button on:click={fetchDataByPOST}>fetch data (POST)</button>