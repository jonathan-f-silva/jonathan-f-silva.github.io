<script lang="ts">
  import photo from "../assets/images/profile.jpg";
</script>

<img src={photo} alt="Foto do Jonathan" />
<h1>Olá, sou o Jonathan! 👋</h1>
<p>
  Sou brasileiro, nasci em São Paulo - SP e atualmente estou morando em Iacanga
  - SP, uma cidadezinha no interior perto de Bauru.
</p>

<style>
  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #006eff;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
