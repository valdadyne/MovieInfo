// Declaring the module dependency
var MongoPortable = require("mongo-portable");

// Instantiates a new ddbb object by passing a ddbb name
var db = new MongoPortable("TEST");

// Creates a new collection named "users"
//      (if it's already created, it will just return it instead)
var users = db.collection("users");
