'use strict';

//?How create regular exp
// /pattern/flags - example: /nan/g this find all strings "nan" in lower case
// new RegExp("pattern", "flags");

//?Patterns
// \d - all nums
// \w - all words
// \s - all spaces

// \D - not nums
// \W - not words
// \S - not spaces

// | - or

//?Flags
//i - 'a' and 'A'
//g - all
//m - multistroke

//?String methods
//.match(str|reg) - find all strings in stroke and get Str, Index, String
//.search(str|reg) - find first entry in stroke and get Index
//.replace(smthSearch, smth) - replace smthSearch to smth

const reg = /Nan/ig; // find all "Nan" in stroke

function generateHashtag(str) {
    return str.replace(/ /g, '').length >= 140 || str.length === 0 ? false : str;
}

generateHashtag("code" + " ".repeat(140) + "wars");

console.log("NaniiNan".search(reg));
console.log("NaniiNan".match(reg));
console.log("Nani-Nani ".replace(/-| /g, ''));