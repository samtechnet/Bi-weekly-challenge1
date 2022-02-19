import supertest from "supertest";
import app from "../index";

describe('endpoint test', () => {
    it('should test the /api endpoint', async() => {
        const request = supertest(app);
        const response = await request.get('/api');
        console.log(response);
        expect(response.status).toEqual(200);
    })
})