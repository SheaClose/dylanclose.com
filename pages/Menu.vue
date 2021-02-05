<template>
  <div>
    <Card>
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
  },
};
</script>

<style lang="scss">
.content-body {
  background-image: url("/menu.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .p-card {
    margin: 40px;
    width: 100%;
    background-color: #000c;
    color: #fff;
    letter-spacing: 1px;
  }
}
.p-progress-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
iframe {
  position: relative;
}
</style>
