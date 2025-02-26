/*
DESCRIPTION:
The idea for this kata came from 9gag today:

The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(words) {
let w= words.toUpperCase().replace(/\s/g,'').split('')
let dic={ 'A': 'Alfa', 'B': 'Bravo',  'C': 'Charlie',
        'D': 'Delta',  'E': 'Echo',    'F': 'Foxtrot',
        'G': 'Golf',   'H': 'Hotel',   'I': 'India',
        'J': 'Juliett','K': 'Kilo',    'L': 'Lima',
        'M': 'Mike',   'N': 'November','O': 'Oscar',
        'P': 'Papa',   'Q': 'Quebec',  'R': 'Romeo',
        'S': 'Sierra', 'T': 'Tango',   'U': 'Uniform',
        'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray',
        'Y': 'Yankee', 'Z': 'Zulu'}
let str=[]
for(let i=0;i<w.length;i++){
 if(w[i]!=='!' && w[i]!==',' && w[i]!=='.' && w[i]!=='?' ){
    str.push(dic[w[i]])
  }else if(w[i]=='!' ||w[i]==',' ||w[i]=='.' || w[i]=='?' ) {
    str.push(w[i])
  }
}
  return str.join(' ')
}
