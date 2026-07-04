//importing fs as we are dealing with file systems and it will have multiple pre-defined functions
import * as fs from "fs"

//as we are trying to use this class in another file we are exporting
export class JsonReader {
    /* Static method that accepts a file path.
       Since it is static, we can call it using JsonReader.readJson()
       without creating an object of JsonReader.*/

    static readJson(filepath: string) {
        /*every function should have implementation, here we are creating a const variable testdata
        and assigning readFileSync method where the parameters are filepath
        */
        const testdata = fs.readFileSync(filepath, 'utf-8')
        /*after implementation either we print the output or return the value
        here we are converting json text to js object
        here JSON is built in js object
        */
        return JSON.parse(testdata);
    }
}