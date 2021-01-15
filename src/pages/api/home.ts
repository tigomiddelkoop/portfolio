import * as fs from "fs";

export default async (req, res) => {

    if (req.method === "GET") {
        const data = await getData();

        res.statusCode = 200;
        res.json(data);
    }

}

export async function getData() {

    const folderPath = process.cwd() + "/data/";
    const rawFile: string = fs.readFileSync(folderPath + "home.json", {encoding: "utf8"});
    return JSON.parse(rawFile);

}