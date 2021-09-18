<script>
  export let name;
  export let alt;
  export let height;
</script>

<img src="/images/{name}.png" {alt} style="height: {height}rem;" />

<style>
  img {
    padding: 0px;
    margin: 0px;
  }
</style>
