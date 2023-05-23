import express from "express";
import cors from "cors"

const PORT = 8080

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", cors(), (request, response) => {
    response.send("CORS-enabled route");
    }
);

app.listen(PORT, () => console.log(`Web server running on ${PORT}`));