/**
 * Node-JS Boilerplate
 * @author Amen Najam
 */


require("dotenv").config();
const app = require("express")();
const port = process.env.PORT || 6000;
require("./database");