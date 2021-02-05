<template>
  <Menubar :model="items">
    <template #start>
      <div class="p-d-flex">
        <h2 @click="routeTo" class="p-d-flex p-ai-center">Hair By Dylan</h2>
        <img
          @click="routeTo"
          src="/DC.png"
          class="p-ml-3"
          style="height: 2em; width: 3em"
        />
      </div>
    </template>
    <template #end>
      <h2 @click="routeTo" class="p-d-flex p-ai-center">
        <img src="/DC.png" alt="" style="height: 2em; width: 3em" />
      </h2>
    </template>
  </Menubar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          class: "p-d-lg-none p-text-bold",
          label: "Hair By Dylan",
          disabled: true
        },
        {
          label: "Home",
          to: "/"
        },
        {
          label: "Contact",
          to: "/Contact"
        },
        {
          label: "Menu",
          to: "/Menu"
        }
      ]
    };
  },
  methods: {
    routeTo() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import "assets/_overrides.scss";
.p-menubar {
  border: none;
  color: rgb(251, 229, 175);
  background-color: #000 !important;
  font-family: "Omnibus";
  h2 {
    font-family: "Omnibus";
  }
}
.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-text {
  color: rgb(251, 229, 175);
}
.p-menubar-root-list {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.p-menubar-end {
  color: rgb(251, 229, 175);
  display: none;
}
.p-menubar-start {
  color: rgb(251, 229, 175);
  width: 100%;
  align-items: center;
}
@media screen and (max-width: $lg) {
  .p-menubar-end {
    color: rgb(251, 229, 175);
    display: initial;
    padding-right: 8.33%;
  }
  .p-menubar-root-list,
  .p-menubar-start {
    color: rgb(251, 229, 175);
    display: none;
  }
  .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
    background-color: #000c;
  }
}
</style>
