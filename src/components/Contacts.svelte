<script>
  import Card from "./Card.svelte";
  import contacts from "../data/contacts";
</script>

<Card title="Contacts">
  <ul>
    {#each contacts as item}
      <li>{item.title}: <a href={item.link}>{item.name}</a></li>
    {/each}
  </ul>
</Card>
