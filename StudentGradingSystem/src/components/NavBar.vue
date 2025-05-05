<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// })

defineProps({
  msg: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  }
})
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div class="container">
            <a class="navbar-brand" href="/front-end/index.html">
                <img src="/images/logo.png" alt="Logo" style="width: 40px;">
            </a>
            <h6>CS346 Course</h6>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/front-end/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/front-end/add.html">Add Student</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div> -->
</template>

<style scoped>

.navbar {
    background-color: black;
    color: white;
}
.container {
    max-width: 900px;
    margin: auto;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
