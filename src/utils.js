import fs from "fs"

import { fileURLToPath } from "url"
import { dirname } from "path"

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

async function writeFile(file, data) {
  try{
    await fs.promises.writeFile(__dirname + "/" + file, JSON.stringify(data))
    return true
  } catch (err) {
    console.log(err)
  }
}

async function readFile(file) {
  try {
      let readfilename = __dirname + "/" + file
      console.log("readfile", readfilename)
      let result = await fs.promises.readFile(readfilename, "utf-8")
      let data = result ? JSON.parse(result) : null
      return data
  } catch (err) {
      console.log(err)
  }
}

async function deleteFile(file, data) {
  try{
    await fs.promises.unlink(__dirname + "/" + file)
    return true
  } catch (err) {
    console.log(err)
  }
}

export default {writeFile, readFile, deleteFile}