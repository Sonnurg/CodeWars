/*
DESCRIPTION:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  let arr = [];

for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
        arr.pop();
    } else {
        arr.push(s[i]);
    }
}
  return arr.join("")
}
