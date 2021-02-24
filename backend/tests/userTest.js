import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";
chai.use(chaiHttp);
chai.should();
describe("user api testing", () => {
  describe("POST /users", () => {
    it("user create with success message", (done) => {
      chai
        .request(app)
        .post("/api/users")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
console.log("testing");
