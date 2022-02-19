"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var PORT = 5000;
var books = [];
app.use((0, cors_1.default)());
//configuring body parser middlerware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.post('/book', function (req, res) {
    var book = req.body;
    console.log(book);
    books.push(book);
    res.send('Book is added to the database');
});
app.get('/api', function (req, res) {
    res.status(200).send('Hello World');
});
app.listen(PORT, function () { return console.log("app started on port ".concat(PORT)); });
exports.default = app;
