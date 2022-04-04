//--------------------------------
// Create a new file using the appendFile() method:
var fs = require('fs');

var file1 = 'mynewfile1.txt';
//create a file named mynewfile1.txt:
fs.appendFile(file1, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!',file1);
  });
  
//--------------------------------
fs.appendFile(file1, ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!',file1);
  });  
//--------------------------------
//   Create a new, empty file using the open() method:
var file2 = 'mynewfile2.txt';
fs.open(file2, 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!' , file2);
  });

//--------------------------------
// Create a new file using the writeFile() method:
var file3 = 'mynewfile3.txt';
fs.writeFile(file3, 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!',file3);
});


//--------------------------------
// Replace the content of the file "mynewfile3.txt":

fs.writeFile(file3, 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!',file3);
});
//--------------------------------
// Delete "mynewfile2.txt":

fs.unlink(file2, function (err) {
  if (err) throw err;
  console.log('File deleted!',file2);
});
//--------------------------------
// Rename "mynewfile1.txt" to "myrenamedfile.txt":
fs.rename(file1, 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
//--------------------------------
//--------------------------------
//--------------------------------
