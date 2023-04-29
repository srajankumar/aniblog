//getting info from the json file and posting directly

import * as fs from "node:fs";
export default function handler(req, res) {
  fs.readdir("blogdata", (err, data) => {
    console.log(data);
    res.status(200).json(data);
  });
}
