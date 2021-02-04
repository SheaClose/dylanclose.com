<template>
  <div class="app">
    <Header class="p-shadow-3" />
    <Nuxt class="content-body" />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "assets/_overrides.scss";
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.p-menubar {
  flex: 0 0 auto;
  background: #fff;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
}
.content-body {
  flex: 1 0 auto;
}

.app {
  background: #ccc;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
