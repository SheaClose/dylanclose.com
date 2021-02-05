<template>
  <div>
    <Card class="p-my-6">
      <template #content>
        <ProgressSpinner v-if="display" />
        <script
          type="application/javascript"
          src="https://square.site/appointments/buyer/widget/cd228kxu1umeet/LK3MWY9F8QC96.js"
        ></script>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return { display: true };
  },
  mounted() {
    setTimeout(() => {
      this.display = false;
    }, 10000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_overrides.scss";

.content-body {
  background-image: url("/menu3.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .p-card {
    margin: auto;
    max-width: 850px;
    width: 100%;
    background-color: #000c;
    color: #fff;
    letter-spacing: 0.5px;
  }
  @media (max-width: $lg) {
    background-image: url("/menu2.jpg");
    .p-card {
      max-width: 80vw;
    }
  }
  @media (max-width: $md) {
    background-image: url("/menu1.jpg");
    .p-card {
      max-width: 90vw;
    }
  }
}
.p-progress-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 423px) {
  .p-progress-spinner {
    display: none;
  }
}
/deep/ iframe {
  position: relative;
}
</style>
