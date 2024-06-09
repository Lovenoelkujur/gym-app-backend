const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const fileRoutes = require("./Routers/file") 

const app = express();

dotenv.config();

const port = process.env.PORT;

// Connect with FrontEnd
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["POST"],
    credentials : true,
}))

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Route
app.use(fileRoutes);

app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`);
})