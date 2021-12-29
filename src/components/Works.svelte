<script>
  import Card from "./Card.svelte";
  import works from "../data/works";
</script>

<Card title="Works">
  <dl>
    {#each works as item}
      <dt><a href={item.url}>{item.name}</a></dt>
      <dd>{item.desc}</dd>
    {/each}
  </dl>
</Card>

<style>
  dd {
    margin-inline-start: 0;
    margin-bottom: 5px;
  }
</style>
