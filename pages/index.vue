<template>
  <div class="container">
    <Card class="p-my-6">
      <template #content>
        <div class="p-d-flex p-jc-center">
          <img
            class="p-mb-3"
            src="/dylan.jpg"
            style="border-radius: 50%; height: 12em; width: 12em"
          />
        </div>
        <p>
          Born and raised in Texas, Dylan spent 10 years as an electrician
          before he traded in his wire cutters for a pair of shears.
        </p>
        <Divider />

        <p>
          In June 2011 he enrolled at the Aveda institute in Austin. Seeking to
          start a career where he could exercise his creative talent in a more
          social setting.
        </p>
        <Divider />

        <p>
          Dylan specializes in long layered full styles, dapper men's cuts, and
          edgy new looks with cut and color. He is constantly striving to
          increase his skills and attends classes multiple times a year.
        </p>
        <Divider />

        <p>
          Ever eager to learn, every head of hair is an exciting new opportunity
          to hone his skill set. In his free time, he enjoys playing and singing
          in his band "Sniper 66" or playing Bass for his other band "Crime
          Revenge". He also is passionate about vintage Vespa scooters,
          American/European football, and fashion.
        </p>
      </template>
    </Card>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_overrides.scss";
.container {
  background-image: url("/main3.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  .p-card {
    max-width: 850px;
    margin: auto;
    background-color: #000c;
    color: #fff;
    letter-spacing: 0.5px;
  }
  @media (max-width: $lg) {
    .p-card {
      max-width: 80vw;
    }
    background-image: url("/main2.jpg");
  }
  @media (max-width: $md) {
    .p-card {
      max-width: 90vw;
    }
    background-image: url("/main1.jpg");
  }
}
</style>
