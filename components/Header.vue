<template>
  <Menubar :model="items" class="p-flex-lg-column">
    <template #start> <h1>Dyl-Do's</h1> </template>
    <!-- <template #start> <h1>Hair By Dylan</h1> </template> -->
    <template #end> <h1>Dyl-Do's</h1> </template>
    <!-- <template #end> <h1>Hair By Dylan</h1> </template> -->
  </Menubar>
</template>

<script>
import Menubar from "primevue/menubar";

export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          to: "/",
        },
        // {
        //   label: "Bio",
        //   to: "/Bio",
        // },
        {
          label: "Contact",
          to: "/Contact",
        },
        // {
        //   label: "Location",
        //   to: "/Location",
        // },
        {
          label: "Menu",
          to: "/Menu",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "assets/_overrides.scss";
.p-menubar-root-list {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.p-menubar-end {
  display: none;
}
@media screen and (max-width: $lg) {
  .p-menubar-end {
    display: initial;
    padding-right: 8.33%;
  }
  .p-menubar-root-list,
  .p-menubar-start {
    display: none;
  }
}
</style>
