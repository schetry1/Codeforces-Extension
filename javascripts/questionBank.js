var QUESTIONS;
async function getQuestionSet() {
  document.getElementById("getLink").style.visibility = "hidden";
  return await fetch("https://codeforces.com/api/problemset.problems")
      .then(data => data.json())
      .then(data => {
          if (data.status != "OK")return;

          QUESTIONS = data.result.problems;
          document.getElementById("getLink").style.visibility = "visible";
          
      })
      .catch(e => console.log(e));
}

getQuestionSet();

