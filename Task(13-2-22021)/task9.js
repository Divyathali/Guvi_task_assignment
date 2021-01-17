function chksecurityQuestions(securityQuestions,question) {
    return (securityQuestions[0].expectedAnswer ===ans )
}


var securityQuestions = [{
 'question': 'What was your first pet’s name?',
 'expectedAnswer': 'FlufferNutter'
 },
 {
 'question': 'What was the model year of your first car?',
 'expectedAnswer': '1985'
 },
 {
 'question': 'What city were you born in?',
 'expectedAnswer': 'NYC'
 }
]

//Test case1:var ques = “What was your first pet’s name?”;
var ans  =  'FlufferNutter';
ques=Object.keys(securityQuestions);
var status = chksecurityQuestions(securityQuestions, ques[0], ans);
console.log(status); // true//Test case2:var ques = “What was your first pet’s name?”;
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques[0], ans);
console.log(status); // flase