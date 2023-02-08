/*
const lucas_lehmer = (n) =>{
 

for (let i = 2; i <=Math.sqrt(n); i++) {

        if (n % i == 0) {
          return false
        }

    }

let pr=Math.pow(2,n)-1
 
for (let j =2; j <pr; j++) {

        if (pr % j == 0) {
          return false
        }

    }
return true
}

*/
const lucas_lehmer = (n) =>{
 

for (let i = 2; i <=Math.sqrt(n); i++) {

        if (n % i == 0) {
          return false
        }

    }

let pr=Math.pow(2,n)-1
 
for (let j =2; j <pr; j++) {

        if (pr % j == 0) {
          return false
        }

    }
return true
}
