const { mkdirp } = require('mkdirp');
const { createWriteStream, writeFile } = require('fs');

const directory = 'src';
const srcDirectories = ['fonts', 'icons', 'images', 'js', 'sass', 'css'];


async function createDirectories() {
    try {
        await mkdirp(directory);
        console.log(`made dir ${directory}`);

        for (const dir of srcDirectories) {
            const srcPath = `${directory}/${dir}`;
            await mkdirp(srcPath);
            console.log(`made dir ${dir}`);

            if (dir === 'sass') {
                await mkdirp(`${srcPath}/base`);
                console.log(`made dir 'base'`);
                await mkdirp(`${srcPath}/blocks`);
                console.log(`made dir 'blocks'`);
                createWriteStream(`${srcPath}/style.scss`);
            }
        }
        writeFile(`${directory}/index.html`, htmlStruct, err => {
            if (err) console.error(err)
        });
        writeFile(`.gitignore`, gitignoreStruct, err => {
            if (err) console.error(err)
        })

        createWriteStream(`${directory}/js/script.js`);
    } catch (err) {
        console.error(err);
    }
}
createDirectories();



const htmlStruct = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`

const gitignoreStruct = `
# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`;