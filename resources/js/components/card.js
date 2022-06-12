export default () => ({
  content: "Antes",
  toggleText() {
    this.content = this.content === "Antes" ? "Depois" : "Antes";
    this.changeButtonColor();
  },
  changeButtonColor() {
    /**
     * @type {HTMLElement}
     */
    const button = this.$refs.button;
  },
});
