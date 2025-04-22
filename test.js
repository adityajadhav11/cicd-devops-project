// test.js
const request = require('supertest');
const app = require('./index'); // optional: restructure app to export for test

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
