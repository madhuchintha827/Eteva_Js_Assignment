let List1=['Arjun', 'Adwait','Swapnil','Amit','Vishal','Adnan']
let List2=[ 'Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav']


// To Get a unique set of users from List1 which are not in List2
let uniqueSet1 = []

for (let user of List1){
    if (List2.includes(user) === false){
        uniqueSet1.push(user)
    }
}
console.log(uniqueSet1)

// To Get a unique set of users from List2 which are not in List1
let uniqueSet2 = []

for (let user of List2){
    if (List1.includes(user) === false){
        uniqueSet2.push(user)
    }
}
console.log(uniqueSet2)

//to Get a set of users who are present in in List1 and List2 .
let commonUsers = []
for (let user of List1){
    if (List2.includes(user)){
        commonUsers.push(user)
    }
}
console.log(commonUsers)