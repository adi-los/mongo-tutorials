"use strict";

var mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/products').then(function (stat) {
  return console.log("Connected Successfully !");
})["catch"](function (err) {
  return console.log(new Error("Error connecting to Mongodb !"));
});
var courseSchema = mongoose.Schema({
  name: String,
  author: String,
  publishedAt: {
    type: Date,
    "default": Date.now
  },
  tags: [String],
  isPublished: {
    type: Boolean,
    "default": false
  }
});
var productSchema = mongoose.Schema({
  name: String,
  quality: String,
  price: Number
});
var Product = mongoose.model("product", productSchema); // async function createProduct(name, quality, price){
//     const product = new Product({
//         name: name,
//         quality: quality,
//         price: price
//     })
//     const myProduct = await product.save()
//     console.log(myProduct)
// }
// createProduct("Skin Care", "Naturel", 65)
// createProduct("Pomodro Mask", "Organic", 120)
// createProduct("Green Mask", "Professional", 115)
// createProduct("piko", "Naturel", 30)
// createProduct("riko", "Naturel", 150)
// createProduct("mamiko two", "Naturel", 12)

function getProduct_gte() {
  var myProduct;
  return regeneratorRuntime.async(function getProduct_gte$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            price: {
              $gte: 100
            }
          }));

        case 2:
          myProduct = _context.sent;
          console.log(myProduct);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

getProduct_gte(); // async function getProduct_StartsWith() {
//     const myProduct = await Product
//     .find({name: /^mamiko/})
//     console.log(myProduct)
// }
// getProduct_StartsWith()
//STARTS WITH mamiko (INSENSITIVE CASES)
// .find({name: /^mamiko/i})
//ENDS WITH mamiko (INSENSITIVE CASES)
// .find({name: /mamiko$/i})
//CONTAINS skin (INSENSITIVE CASES)
// .find({name: /.*skin.*/i})
// async function getProduct_gt() {
//     const myProduct = await Product.find({price:{$gt: 100}})
//     console.log(myProduct)
// }
// getProduct_gt()
// async function getProduct_lt() {
//     const myProduct = await Product.find({price:{$lt: 100}})
//     console.log(myProduct)
// }
// getProduct_lt()
// async function getProduct_gte() {
//     const myProduct = await Product.find({price:{$gte: 100}})
//     console.log(myProduct)
// }
// getProduct_gte()
// const Course = mongoose.model("course", courseSchema)
// async function createCourse(theName, theAuthor, published, ...tags) {
//     const course = new Course({
//         name: theName,
//         author: theAuthor,
//         tags: tags,
//         isPublished: published
//     })
//     const myCourse = await course.save()
//     console.log(myCourse)
// }
// createCourse("Javascript Course", "Mrabti Adil", true, "HTML", "CSS", "JS", "DOM", "BOM", "Fron-end")
// createCourse("HTML Course", "Mrabti Adil", true, "Tags", "Semantic", "id", "class", "meta", "seo")
// createCourse("Css Course", "Mrabti Adil", true, "style", "CSS", "property", "selector", "cascading", "Fron-end")
// async function getAllCourses() {
//     const courses = await Course.find()
//     console.log(courses)
// }
// getAllCourses()
// async function getCourse() {
//     const course = await Course.find({name: "HTML Course"})
//     console.log(course)
// }
// getCourse()