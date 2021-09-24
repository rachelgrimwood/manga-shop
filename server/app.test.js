const request = require("supertest");
const server = require("./server");

const allProudcts = [
  {
    price: "$25.00",
    description:
      "Naruto is a young shinobi with an incorrigible knack for mischief.",
    isbn: 9781421539898,
    title: "Naruto: 3-in-1 Edition, Vol. 1",
    rating: "5 stars",
    img: "https://images-na.ssl-images-amazon.com/images/I/61ExB5eOiBL._SX331_BO1,204,203,200_.jpg",
  },
  {
    price: "$5.55",
    description:
      "Midoriya inherits the superpower of the world’s greatest hero, but greatness won’t come easy.",
    isbn: 9781421582696,
    title: "My Hero Academia, Vol. 1",
    rating: "5 stars",
    img: "https://images-na.ssl-images-amazon.com/images/I/51FAgOL-1bL._SX331_BO1,204,203,200_.jpg",
  },
  {
    price: "$10.00",
    description:
      "Tiger Girl battles Wolf Hound in The Cunning Trap of the Wolf Hound! and When the Pussy Cat Pounces -- Watch Out!",
    isbn: 978142158456,
    title: "Tiger Girl No. 1",
    rating: "4.5 stars",
    img: "https://images-na.ssl-images-amazon.com/images/I/51seMCZXn4L._SX334_BO1,204,203,200_.jpg",
  },
  {
    price: "$9.17",
    description:
      "In this post-apocalytpic sci-fi story, humanity has been devastated by the bizarre, giant humanoids known as the Titans.",
    isbn: 9781612620244,
    title: "Attack on Titan 1",
    rating: "5 stars",
    img: "https://images-na.ssl-images-amazon.com/images/I/51ywmxi7JVL._SX331_BO1,204,203,200_.jpg",
  },
  {
    price: "$9.99",
    description:
      "Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family!",
    isbn: 1974700526,
    title: "Demon Slayer: Kimetsu no Yaiba, Vol. 1",
    rating: "5 stars",
    img: "https://images-na.ssl-images-amazon.com/images/I/61RLgk2k-1L._SX331_BO1,204,203,200_.jpg",
  },
  {
    price: "$9.99",
    description:
      "To gain the power he needs to save his friend from a cursed spirit, Yuji Itadori swallows a piece of a demon, only to find himself caught in the midst of a horrific war of the supernatural!",
    isbn: 1974710025,
    title: "Jujutsu Kaisen, Vol. 1 ",
    rating: "5 stars",
    img: "https://images-na.ssl-images-amazon.com/images/I/51CcaF9O78L._SX331_BO1,204,203,200_.jpg",
  },
];
const expectedProduct = {
  _id: '614d290f22d9c1428300016f',
  price: "$9.17",
  description:
    "In this post-apocalytpic sci-fi story, humanity has been devastated by the bizarre, giant humanoids known as the Titans.",
  isbn: 9781612620244,
  title: "Attack on Titan 1",
  rating: "5 stars",
  img: "https://images-na.ssl-images-amazon.com/images/I/51ywmxi7JVL._SX331_BO1,204,203,200_.jpg",
};

describe("GET /products", () => {
  test("should return all products", async () => {
    await request(server)
      .get("/products")
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(allProudcts);
      });
  });
});

describe("GET /proudcts/:id", () => {
  test("should return one product whose id matches", async () => {
    await request(server)
      .get("/products/id")
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expectedProduct);
      });
  });
});
