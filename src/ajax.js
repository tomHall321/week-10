// import axios with configuration
import axios from "./axios";

axios.get("/articles").then(({data}) => console.log(data.data));

axios.post("/articles", {
    title: "It's react week 10",
    tags: ["ajax" ,"react"],
}).then(({data}) => console.log(data.data.id));

axios.get("/articles/22").then(({data}) => console.log(data.data));

