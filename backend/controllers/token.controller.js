import ErrorCustome from "../utilities/error.js";

export default class TokenController {
  constructor(userModel, adminModel, tokenRepos, tokenModel, next) {
    this.userModel = userModel;
    this.adminModel = adminModel;
    this.tokenRepos = tokenRepos;
    this.tokenModel = tokenModel;
    this.next = next;
  }
  async createTokenByEmail(email) {
    console.log("9999999");
    let usertype;
    let res1 = await this.userModel.findOne({ email: email });
    if (res1) {
      usertype = "user";
    }
    if (!res1) {
      res1 = await this.adminModel.findOne({ email: email });
      if (res1) {
        usertype = "admin";
      }
    }
    console.log("hyyyyy");
    if (!res1) {
      let err1 = new Error();
      err1.res = new ErrorCustome("the user not found", "", 500);
      this.next(err1);
      return;
    }
    console.log(this.tokenModel);
    let token = await new this.tokenRepos(
      this.userModel,
      this.tokenModel,
      this.adminModel,
      this.next
    ).addToken(res1._id);

    let Type = { type: usertype };
    console.log(Type, token, "hellom from res 1 and token");
    return { token, Type };
  }
  async createTokenByRefresh(token) {
    let user = await new this.tokenRepos(
      this.userModel,
      this.tokenModel,
      this.adminModel,
      next
    ).getPasetoUser(token);
    let tokennew = await new this.tokenRepos(
      this.userModel,
      this.tokenModel,
      adminModel,
      this.next
    ).addToken(user.tokenModel._id);
    return tokennew;
    //let res1 = userRepos().getUserByEmail();
    //let res2 = adminRepos().getAdminByEmail(req.headers["email"]);
  }
  async getPasetoUser(token) {
    let user = await new this.tokenRepos(
      this.userModel,
      this.tokenModel,
      this.adminModel,
      this.next
    ).getPasetoUser(token);
    return user;
  }
  async deleteUserToken(userID) {
    let user = await new this.tokenRepos(
      this.userModel,
      this.tokenModel,
      this.adminModel,
      this.next
    ).deleteUserToken(userID);
    return {};
  }
}
// constructor(userModel,TokenModel = null, token = null,adminModel,next)
