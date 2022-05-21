<script>
  import Card from "./Card.svelte";
  import experiences from "../data/experiences";
</script>

<Card title="Work Experiences">
  <ul>
    {#each experiences as item}
      <li>
        {item.date} <b>{item.name}</b>
        {#if item.desc}
          - {item.desc}
        {/if}
      </li>
    {/each}
  </ul>
</Card>
