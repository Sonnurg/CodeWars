//It's time to create an autocomplete function! Yay!

//The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. 
//If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

//My solution
function autocomplete(input, d){
  let res=[]
  input=input.replace(/[^a-zA-Z-]/g, '')
for(let i=0;i<d.length;i++){
  if(d[i].slice(0,input.length).toLowerCase()==input.toLowerCase()){
    res.push(d[i])
  }
}
  return res.slice(0,5)
}
