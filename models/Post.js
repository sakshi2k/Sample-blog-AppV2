const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        postTitle : {
            type : String ,
            required : true
        },
        
        postBody : {
            type : String ,
            required : true
        }
    }
)

module.exports = Post = mongoose.model("blogDB", postSchema);