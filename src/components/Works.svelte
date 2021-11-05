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
  dt {
    float: left;
  }
  dd::before {
    content: "-";
    color: gray;
    margin: 0 0.5em;
  }
</style>
