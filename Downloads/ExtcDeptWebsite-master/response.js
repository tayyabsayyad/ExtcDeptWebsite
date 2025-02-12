// function getBotResponse(input) {
//   let userText = $("#textInput").val();
//   let result = input.toLowerCase();
//     //rock paper scissors
//     if (result == "parents") {
//        return `The following are frequently searched terms related to parents.</br>Please select one from the options below :</br>
//        <button onclick="window.open('/aboutus/aboutus.html', '_blank')">About us</button>
//        <button onclick="window.open('/faculty/faculty_profile.html', '_blank')">Faculty</button>
//        <button onclick="window.open('/placement&internship/placement2.html', '_blank')">Placement</button>
//        <button onclick="window.open('/academics/syllabus.html', '_blank')">Academics</button>
//        <button onclick="window.open('https://elearn.dbit.in/login/index.php', '_blank')">Moodle</button>
//        <button onclick="window.open('/student/sports.html', '_blank')">Co-Curriculars</button>
//        <button onclick="window.open('http://127.0.0.1:5500/assets/pdf/V3_EXTC_ClassTimeTable_AY2022-23_Odd_Semester.pdf', '_blank')">Time Table</button>`;
//     }else if (result == "students"){
//       return `The following are frequently searched terms related to .</br>Please select one from the options below :</br>
//       <button onclick="window.open('/aboutus/aboutus.html', '_blank')">About us</button>
//       <button onclick="window.open('/faculty/faculty_recognition.html', '_blank')">Faculty</button>
//       <button onclick="window.open('/placement&internship/placement2.html', '_blank')">Placement</button>
//       <button onclick="window.open('https://www.dbit.in/news.html', '_blank')">Notices</button>
//       <button onclick="window.open('/cocurricular/industrial_training.html', '_blank')">Industrial Visit</button>`;
//     } else if (result == "visitors") {
//       return `The following are frequently searched terms related to Visitors.</br>Please select one from the options below :</br>
//       <button onclick="window.open('/aboutus/aboutus.html', '_blank')">About us</button>
//       <button onclick="window.open('https://ieee.dbit.in/')">Student Bodies</button>
//       <button onclick="window.open('/placement&internship/intenship.html', '_blank')">Placement</button>
//       <button onclick="window.open('/placement&internship/intenship.html', '_blank')">Extra Curriculars</button>`;
//     }

//     // Simple responses
//     if (input == "hello") {
//         return "Hello there!";
//     } else if (input == "goodbye") {
//         return "Talk to you later!";
//     } else {
//         return "Try asking something else!";
//     }
// }

// const googleButton = createGoogleButton();
// document.input-box.appendChild(googleButton);

// function createGoogleButton() {
//     const button = document.createElement("button");
//     const link = document.createElement("a");
//     link.href = "https://www.google.com";
//     link.textContent = "Go to Google";
//     button.appendChild(link);
//     return button;
//   }
//   function addStyles() {
//     let style = document.createElement("style");
//     style.innerHTML = `
//       #chatbot {
//         text-align: left;
//       }
  
//       button {
//         background-color: #4CAF50;
//         border: none;
//         color: white;
//         padding: 10px 20px;
//         text-align: center;
//         text-decoration: none;
//         display: inline-block;
//         font-size: 16px;
//         margin: 4px 2px;
//         cursor: pointer;
//       }
  
//       button:hover {
//         background-color: #3e8e41;
//       }
//     `;
//     document.head.appendChild(style);
//   }
function getBotResponse(input) {
  let result = input.toLowerCase();
  let firstMessage = "Hi there, Welcome to Dept of EXTC DBIT! 👋 If you need any assistance, I'm always here."
    let secondMessage ="Which of the following user groups do you belong to?</br> 1.) Parent</br> 2.) Student</br> 3.) Faculty </br>"
  //rock paper scissors
  if (result == "student") {
    return `The following are frequently searched terms related to students.</br>Please select one from the options below :</br>
        <button onclick="window.open('/aboutus/aboutus.html', '_blank')">About us</button>
       <button onclick="window.open('/faculty/faculty_profile.html', '_blank')">Faculty</button>
        <button onclick="window.open('/placement&internship/placement2.html', '_blank')">Placement</button>
        <button onclick="window.open('/academics/syllabus.html', '_blank')">Academics</button>
        <button onclick="window.open('https://elearn.dbit.in/login/index.php', '_blank')">Moodle</button>
        <button onclick="window.open('https://ieee.dbit.in/')">Student Bodies</button>
        <button onclick="window.open('/student/sports.html', '_blank')">Co-Curriculars</button>
        <button onclick="window.open('http://127.0.0.1:5500/assets/pdf/V3_EXTC_ClassTimeTable_AY2022-23_Odd_Semester.pdf', '_blank')">Time Table</button>`;
  
   
  } else if (result == "parent") {
    return `The following are frequently searched terms related to parents.</br>Please select one from the options below :</br>
        <button onclick="window.open('/aboutus/aboutus.html', '_blank')">About us</button>
       <button onclick="window.open('/faculty/faculty_profile.html', '_blank')">Faculty</button>
        <button onclick="window.open('/placement&internship/placement2.html', '_blank')">Placement</button>
        <button onclick="window.open('/cocurricular/industrial_training.html')">Industrial Visit</button>
        <button onclick="window.open('/faculty/research/minorgrants.html', '_blank')">Research Grants</button>`;
  
  } else if (result == "faculty") {
    return `The following are frequently searched terms related to Faculty</br>Please select one from the options below :</br>
      <button onclick="window.open('/cocurricular/project.html', '_blank')">Projects</button>
       <button onclick="window.open('/faculty/faculty_recognition.html')">Recognition</button>
       <button onclick="window.open('/faculty/faculty_profile.html', '_blank')">Profile</button>
       <button onclick="window.open('/academics/syllabus.html', '_blank')">Syllabus</button>`;
  }

  // Simple responses
  if (result == "address") {
      return "1st floor c wing,</br> Don Bosco Institue Of Technology Premier Automobiles Road Kurla West.";
  } else if (result == "hi") {
      return  firstMessage +" "+secondMessage ;
  } else {
      return "Try asking something else!";
  }
}
// The following are frequently searched terms related to Students</br>Please select one from the options below :</br>
//           <button onclick="window.open('/aboutus/aboutus.html', '_blank')">About us</button>
//           <button onclick="window.open('/faculty/faculty_recognition.html', '_blank')">Faculty</button>
//            <button onclick="window.open('/placement&internship/placement2.html', '_blank')">Placement</button
//             <button onclick="window.open('/cocurricular/industrial_training.html', '_blank')">Industrial Visit</button>