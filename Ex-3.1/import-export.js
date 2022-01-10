// What is the difference between import and require?
// How can you enable using the import syntax using node js
// Give 2 node.js environment variables that are not available
// when using the import syntax.
// Create 3 functions using the export/import syntax.
// Import the file system module using the import syntax

/*require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

Save the file with .mjs extension
//! or Add { "type": "module" } in the nearest package.json.
*/
import * as fs from 'fs';
import { a, b, c } from './toImport.js';

a();
b();
c();
fs.writeFileSync('import.txt', 'this file was writen with imported fs.');
