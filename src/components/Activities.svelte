<script>
  import Card from "./Card.svelte";
  import activities from "../data/activities";
</script>

<Card title="Activities">
  {#each activities as activity}
    <h3>{activity.year}</h3>
    <ul>
      {#each activity.items as item}
        <li>
          {item.date} <b>{item.name}</b>
          {#if item.desc}
            - {item.desc}
          {/if}
        </li>
      {/each}
    </ul>
  {/each}
</Card>

<style>
  h3 {
    margin-bottom: 0;
  }
  ul {
    margin-top: 0;
  }
</style>
