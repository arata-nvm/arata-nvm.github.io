<script>
  import Card from "./Card.svelte";
  import accounts from "../data/accounts";
</script>

<Card title="Accounts">
  <ul>
    {#each accounts as item}
      <li>{item.title}: <a href={item.link}>{item.name}</a></li>
    {/each}
  </ul>
</Card>
