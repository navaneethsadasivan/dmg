import { CookieScheme } from "~auth/runtime";

export default class UserScheme extends CookieScheme {
  // eslint-disable-next-line require-await
  async registerUser(data) {
    await this.$axios.post('postNewUser' , {
      name: data.username,
      password: data.password
    })
  }
}
