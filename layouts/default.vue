<template>
  <div class="app">
    <Header />
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
a {
  background-color: transparent !important;
  text-decoration: none !important;
  &:link {
    color: #008080 !important;
  }
  &:visited {
    color: #00808066 !important;
  }
}
.p-divider {
  color: #008080 !important;
}
.p-divider.p-divider-horizontal:before {
  border-top: 1px #008080;
}
.p-menubar {
  .p-menubar-root-list > .p-menuitem {
    font-weight: 900;
    letter-spacing: 1px;
    :hover {
      .p-menuitem-text {
        color: #008080;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .p-menubar .p-menubar-button:focus {
    box-shadow: none;
  }
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
  box-shadow: none;
}
@media screen and (max-width: 960px) {
  .p-menubar .p-menubar-button {
    color: rgb(251, 229, 175);
  }
}
</style>
