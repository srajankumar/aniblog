//getting info from the json file and posting directly

//http://localhost:3000/api/blogs

import * as fs from "node:fs";
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  data = data.slice(0, parseInt(req.query.count)); //array slice
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
