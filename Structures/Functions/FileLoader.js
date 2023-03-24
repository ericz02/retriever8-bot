const { promisify } = require("util")
const { glob } = require("glob")
const PG = promisify(glob)

/**
 * 
 * @param {String} params 
 */
async function loadFiles(folderName) {
 
    const files = await PG(`${process.cwd().replace(/\\/g, "/")}/${folderName}/*/*.js`)
    files.forEach(file => delete require.cache[require.resolve(files)])
    return files
    
}

module.exports = { loadFiles }