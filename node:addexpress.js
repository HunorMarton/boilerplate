const fs = require("fs");
const execSync = require("child_process").execSync;

const name = process.argv[2];
if (!name) throw Error("You should provide a project name as an attribute");

console.log("Add packages");
execSync(`sh boilerplate/node:addexpress:pre.sh ${name}`);

console.log("Rewriting your entry file");

const fileContent = `import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(\`Example app listening on port \${port}!\`))`;

fs.writeFileSync(`${name}/src/index.ts`, fileContent);
