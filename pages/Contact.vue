<template>
  <div class="contact-container">
    <Card>
      <template #content>
        <div>
          <div class="p-grid">
            <div class="p-col-12 p-md-8" id="map"></div>
            <div class="contact p-col-12 p-md-4 p-px-5">
              <h3 class="p-mb-1">Location:</h3>
              <p>4533 Ruiz St #3</p>
              <p>Austin, TX 78723</p>
              <h3 class="p-my-1">Hours:</h3>
              <p>Monday - Saturday:</p>
              <p>10:00 AM - 5:00 PM</p>
              <h3 class="p-my-1">Contact:</h3>
              <p class="p-grid">
                <i class="p-col-fixed fab fa-facebook" style="width: 2rem"></i>
                <a
                  href="https://www.facebook.com/DylanCloseEncounters"
                  class="p-col"
                >
                  /DylanCloseEncounters
                </a>
              </p>
              <p class="p-grid">
                <i class="p-col-fixed fab fa-instagram" style="width: 2rem"></i>
                <a
                  href="https://www.instagram.com/dylan_close_encounters/"
                  class="p-col"
                >
                  @Dylan.Close.Encounters
                </a>
              </p>
              <p class="p-grid">
                <i class="p-col-fixed fa fa-mobile-alt" style="width: 2rem"></i>
                <a
                  href="https://www.instagram.com/dylan_close_encounters/"
                  class="p-col"
                >
                  (682) 472-7491
                </a>
              </p>
            </div>
          </div>
        </div>
        <Divider />
      </template>
    </Card>
  </div>
</template>

<script>
const apiKey = "AIzaSyD48MJ_f0TCqUdP7VzwwEB_PZiz-dInePs"; // Package: @nuxtjs/dotenv
export default {
  head() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      if (window && window.google && window.google.maps) {
        const latLng = { lat: 30.29823840450783, lng: -97.70183225262568 };
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: latLng,
          zoom: 14,
        });
        new google.maps.Marker({
          position: latLng,
          map,
          title: "Haute European Salon",
        });
      }
    }, 1000);
  },
};
</script>

<style lang="scss">
@import "assets/_overrides.scss";
.contact-container {
  background-image: url("/contact.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  .p-card {
    margin: 40px;
    width: 100%;
    .icon {
      height: 1em;
      line-height: 1;
    }
  }
  #map {
    height: 0;
    padding-bottom: 36%;
    @media (max-width: $sm) {
      padding-bottom: 100%;
    }
  }
  .contact {
    @media (max-width: $md) {
      padding: 0.5rem !important;
    }
  }
}
</style>