import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";
chai.use(chaiHttp);
chai.should();

//user create route testing
describe("user api testing", () => {
  describe("POST /users", () => {
    it("user create with success message", function (done) {
      this.timeout(10000);
      let user = {
        name: "Ruhul amin",
        email: "ruhul1aad1@gmail.com",
        password: "123456",
        isAdmin: "false",
      };
      chai
        .request(app)
        .post("/api/users")
        .send(user)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("success");
          res.body.should.have.property("body");
          done();
        });
    });
  });
});
