import axios from "axios";
import Swal from 'sweetalert2'
import { darken } from "polished";

export default () => ({
  users: [],
  darkPourple: darken(0.1, "#7159c1"),
  init() {
    this.handleFetchUsersFromGithub();
  },
  async handleFetchUsersFromGithub(){
    try {
      const {data:users} = await axios.get("https://api.github.com/orgs/CuC-Softs/members")
      this.users = users;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }
});
