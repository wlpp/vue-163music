import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() msg!: string;
  message = "123";

  mounted() {
    console.log(this.message);
  }
}
