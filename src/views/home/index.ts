import { Component, Prop, Vue } from "vue-property-decorator";
// import axios from "axios";
@Component
export default class Home extends Vue {
  @Prop() msg!: string;
  carouselList = [];
  mounted() {
    // axios({
    //   url: "/banner?type=0"
    // }).then(res => {
    //   this.carouselList = res.data.banners;
    //   console.log(this.carouselList);
    // });
  }
}
