let request = require("supertest");
let server;

describe("Express App Tests", () => {
  beforeAll(() => {
    server = require("../app.js");
  });

  afterAll(() => {
    server.close();
  });

  it("GET / should return hello world", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("hello world");
  });

  it("GET /ContactUs should return JSON message", async () => {
    const res = await request(server).get("/ContactUs");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("This is ContactUs page");
  });
});
