//store profile info in the object 
const profile = {
    fname:'sourav',
    lname:'bose',
    posts:200,
    followers:700,
    following:20,
    job:'student',
    bioDescription:'pursuing BCA and Cybersecurity',
};

console.log(`${profile['fname']} ${profile['lname']} Profile Info....`)

// printing the values using fstring
console.log(`Posts => ${profile['posts']}\nFollowers => ${profile['followers']}\nFollowing => ${profile['following']}\nJob => ${profile['job']}\nBio => ${profile['bioDescription']}`);