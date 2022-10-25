
//*Libararies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');


//* routes
const postdataRoute = require('./routes/postdata');

//* Modifications
const app = express();
dotenv.config({ path: "./env/.env" });
app.use(express.json())
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));
// app.options('*', cors())

//* Logging 
if (process.env.NODE_ENV == "developement") {
    app.use(morgan(':date :method ":url"'))
}




//* Middleware
app.use("/api/ersalData", postdataRoute)

//* 404 page
app.use((req, res, next) => {
    return res.status(404).json({
        status: 404,
        success: false,
        message: "صفحه مورد نظر یافت نشد."
    })
})

app.use((error, req, res, next) => {
    const status = error?.status || error?.code || 500
    const message = error?.message || "InternalServerError"
    return res.json({
        status,
        success: false,
        message
    })

})


app.listen(process.env.PORT, () => console.log(`Server running on port 3000 on ${process.env.NODE_ENV} Mode!`))