import { GET, POST, PUT, DELETE, PATCH } from "../methos.js";
import { expect } from "chai";
import { baseURL } from "../config.js";
import { logBugReport } from "../utils.js";

let totalProducts = 0;

describe("Products GET Method", () => {
    
    before(async () => {
        const response = await GET(baseURL, "/products");
        console.log(response.status);
    });


    it("should return all products", async () => {
        const response = await GET(baseURL, "/products");
        totalProducts = response.length;
        expect(response).to.be.an("array");
    });

    it("should return a product by id", async () => {
        const  response = await GET(baseURL, "/products/1");
        expect(response).to.be.an("object");
        expect(response.id).to.be.equal(1);
    });

    it('should have unique id for each product', async () => {
        const response = await GET(baseURL, "/products");
        let ids = [];
        for (let i = 0; i < totalProducts; i++) {
            ids.push(response[i].id);
        }
        // console.log(ids); // to check if the ids are correct
        const uniqueIds = [...new Set(ids)];
        expect(uniqueIds).to.have.lengthOf(totalProducts);
    });

    it('should have a title for each product', async () => {
        const response = await GET(baseURL, "/products");
        for (let i = 0; i < totalProducts; i++) {
            expect(response[i].title).to.be.a("string");
        }
    });

    it('should have a price for each product', async () => {
        const response = await GET(baseURL, "/products");
        for (let i = 0; i < totalProducts; i++) {
            expect(response[i].price).to.be.a("number");
        }
    });

    it('should have a description for each product', async () => {
        const response = await GET(baseURL, "/products");
        for (let i = 0; i < totalProducts; i++) {
            expect(response[i].description).to.be.a("string");
        }
    });

    it('should have a category for each product', async () => {
        const response = await GET(baseURL, "/products");
        for (let i = 0; i < totalProducts; i++) {
            expect(response[i].category).to.be.a("string");
        }
    });

    it('should have a image for each product', async () => {
        const response = await GET(baseURL, "/products");
        for (let i = 0; i < totalProducts; i++) {
            expect(response[i].image).to.be.a("string");
        }
    });

    it('should have a rating for each product', async () => {
        const response = await GET(baseURL, "/products");
        for (let i = 0; i < totalProducts; i++) {
            expect(response[i].rating).to.be.an("object");
        }
    });
});

describe("Products POST Method", () => {
    it("should create a new product", async () => {
        const response = await POST(baseURL, "/products", {
            title: "Test Product",
            price: 100,
            description: "This is a test product",
            image: "https://via.placeholder.com/150",
            category: "test"
        }); 

        console.log(response);
        expect(response).to.be.an("object");
        expect(response.id).to.be.a("number").and.to.be.greaterThan(totalProducts);
        expect(response.title).to.be.equal("Test Product");
        expect(response.price).to.be.equal(100);
        expect(response.description).to.be.equal("This is a test product");
        expect(response.image).to.be.equal("https://via.placeholder.com/150");
        expect(response.category).to.be.equal("test");


        totalProducts++; // to update the total products
     
    });


    it('should create 10 unique products', async () => {
        let responses = [];
    
        for (let i = 0; i < 10; i++) {
            const response = await POST(baseURL, "/products", {
                title: `Test Product ${i}`,
                price: 100,
                description: "This is a test product",
                image: "https://via.placeholder.com/150",
                category: "test"
            });
            responses.push(response);
        }
    
        try {
            const ids = responses.map(r => r.id);
            const uniqueIds = [...new Set(ids)];
    
            console.log("IDs:", ids);
            console.log("Unique IDs:", uniqueIds);
    
            expect(uniqueIds).to.have.lengthOf(10); // 🔥 Will fail if duplicates
            totalProducts += 10;
        } catch (error) {
            logBugReport(error, "Creating multiple products", "POST /products", responses);
            throw error;
        }
    });
});    