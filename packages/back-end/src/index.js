const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 7000;
app.use(cors());

const s = `
Contents
1	Overview
1.1	Relations to other languages
2	History
2.1	Early developments
2.2	K&R C
2.3	ANSI C and ISO C
2.4	C99
2.5	C11
2.6	C18
2.7	Embedded C
3	Syntax
3.1	Character set
3.2	Reserved words
3.3	Operators
4	"Hello, world" example
5	Data types
5.1	Pointers
5.2	Arrays
5.3	Array–pointer interchangeability
6	Memory management
7	Libraries
7.1	File handling and streams
8	Language tools
9	Uses
10	Related languages
11	See also
12	Notes
13	References
14	Sources
15	Further reading
16	External links
In 1978, Brian Kernighan and Dennis Ritchie published the first edition of The C Programming Language.[1] This book, known to C programmers as "K&R", 
served for many years as an informal specification of the language.
The version of C that it describes is commonly referred to as K&R C. The second edition of the book[13] covers the later ANSI C standard, described below.

K&R introduced several language features:

Standard I/O library
long int data type
unsigned int data type
Compound assignment operators of the form =op (such as =-) were changed to the form op= (that is, -=) to remove 
the semantic ambiguity created by constructs such as i=-10, which had been interpreted as i =- 10 (decrement i by 10) instead of the possibly intended i = -10 (let i be -10).
`;

app.get("/chunk", (req, res) => {
  // if no Content-Type header, proxy will work correct
  res.setHeader("Content-Type", "text/plain");
  try {
    const max = 6;
    let count = 1;
    const timer = setInterval(() => {
      res.write(s);
      count++;
      if (count === max) {
        res.end("end");
        clearInterval(timer);
      }
    }, 5000);
  } catch (e) {
    res.end(e);
  }
});
app.get("/proxy", (req, res) => {
  // if no Content-Type header, proxy will work correct
  res.setHeader("Content-Type", "text/plain");
  try {
    const max = 6;
    let count = 1;
    const timer = setInterval(() => {
      res.write(s);
      count++;
      if (count === max) {
        res.end("end");
        clearInterval(timer);
      }
    }, 5000);
  } catch (e) {
    res.end(e);
  }
});
app.listen(port);
