function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {};
// here, we would process this data to achieve the desired result.

const CourseInfo = {                                                    // COURSE INFO
  id: 451,
  name: "Introduction to JavaScript"
};

let isCourseId = CourseInfo.id;
 
{
    if ( isCourseId === 451);  {
      isCourseId = 'true';
      console.log(isCourseId);  // check for mismating course_id
// } else {
     
    //   isCourseId =  'false'; 
    // };
      try {
        throw new TypeError("Oops, invalid input. Please enter correct course ID#.");
      } catch ({ name, message }) {
        console.log(message); // "oops" error message
      };
  
    }

const learnerSubmissions = [                                          // LEARNER SUBMITIONS
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


// learnerSubmissions.map(prop => { learner_id  })
// for ( let i = 0; i < learnerSubmissions.length; i++ ); // loop through learner submittions for id
// if(learnerSubmissions.learner_id === 125){



for (const learner_id in learnerSubmissions) {
  if(learnerSubmissions.learner_id === 125) {
console.log(studentId);

};
console.log(learnerSubmissions.flat());
let studentId = learnerSubmissions.learner_id; {
  break;
}};




const assignmentGroup = {                                                  // ASSIGNMENT GROUP
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };

}


// If an assignment is not yet due, do not include it in the results or the average.
//  Additionally, if the learner’s submission is late (submitted_at is past due_at), 
// deduct 10 percent of the total points possible from their score for that assignment.


                                                  




{
let isAssignmentLate = learnerSubmissions.submission;
}
    function isAssignmentLate() {Date.now;} ;
      if (isAssignmentLate != "2023-03-07")
      isAssignmentLate = 'true';
    // for ( let i = 0; i < learnerSubmissions.length; i++ ); // loop through learner submittions for id

      console.log(isAssignmentLate);  // check for late assignment
      // } else {
           
          //   isAssignmentLate =  'false'; 
          // };
            try {
              throw new TypeError("Oops, assignment is late.");
            } catch ({ name, message }) {
              console.log(message); // "oops" error message
            };
        
          
           
      // loop through assignments 




      const assignment = new learnerScore125();
      const learnerScore125 = [];
      learnerScore125.push(47);
      learnerScore125.push(150); 
      
      
      for (let i = 0; i < learnerScore125; i++) {
        
      
      }
      
      console.log(learnerScore125[0]);
  
   




  console.log(submission.score);


const arrayOfScores = [47, 150];


for (let arrayOfScore of arrayOfScores){
  let  avgScore = (submission.score / points_possible);
    // avgScore = (arrayOfScore / arrayOfScores.length) * arrayOfScores.length
console.log(avgScore);
}

  

 






  


  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  // return result;



  
    



