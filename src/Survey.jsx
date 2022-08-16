import React, { useState } from "react";
import Options from "./Options";
import "./Survey.css";
import axios from "axios";
function Survey({ Count }) {
  var items = [];
  axios.get("https://immense-tundra-72585.herokuapp.com/").then(function (response) {
    items = [...response.data];
    console.log(items);
  });

  const addItem = (addItem) => {
    console.log(addItem)
    axios({
      method: "post",
      url: "https://immense-tundra-72585.herokuapp.com/",
      data:addItem,
    });
  };
  const [userData, setuserData] = useState({
    userName: "",
    question1: "",
    question2: "",
  });
  function clickedDataQ1(clickedData) {
    setuserData({
      ...userData,
      question1: clickedData,
    });
  }
  function clickedDataQ2(clickedData) {
    setuserData({
      ...userData,
      question2: clickedData,
    });
  }
  return (
    <>
      <div className="main__div">
        <div className="page1">
          <div className="innerPage">
            <h1>
              Hey! I'm <span>wysa</span>
            </h1>
            <p>
              Our conversations are private & anonymous, so there is no
              login.Just choose a nickname and we're good to go
            </p>
            <input
              type="text"
              placeholder="Choose a nickname..."
              value={userData.userName}
              onChange={(e) => {
                setuserData({
                  ...userData,
                  userName: e.target.value,
                });
              }}
            />

            <p>
              By continuing, I confirm I am 13 or older and accept the{" "}
              <a href="/">Terms of Service</a> and{" "}
              <a href="/">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="page2" style={{ display: Count === 1 && "inline" }}>
          <div className="innerPage">
            <h2>
              Let's say in a few weeks, you're sleeping well. What would change?
            </h2>
            <p>Select the change you would like to see.</p>
            <Options
              text={"I would go to sleep easily"}
              colors={"#3BACB6"}
              clicked={clickedDataQ1}
            />
            <Options
              text={"I would sleep through the night"}
              colors={"#3A5BA0"}
              clicked={clickedDataQ1}
            />
            <Options
              text={"I'd wake up on time , refreshed'"}
              colors={"#590696"}
              clicked={clickedDataQ1}
            />
            <br />
          </div>
        </div>
        <div className="page3" style={{ display: Count === 2 && "inline" }}>
          <div className="innerPage">
            <h2>
              That's a great goal. How long have you been struggling with your
              sleep
            </h2>
            <Options
              text={"Less than 2 weeks"}
              colors={"#3BACB6"}
              clicked={clickedDataQ2}
            />
            <Options
              text={"2 to 8 Weeks"}
              colors={"#3A5BA0"}
              clicked={clickedDataQ2}
            />
            <Options
              text={"More than 8 weeks"}
              colors={"#590696"}
              clicked={clickedDataQ2}
            />
          </div>
          <button
            id="next"
            onClick={() => {
              if (userData.question1 !== "" && userData.question2 !== "") {
                addItem(userData)
                alert("Submitted successfully");
                setuserData({
                  userName: "",
                  question1: "",
                  question2: "",
                });
              } else {
                alert("Please complete all questions");
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Survey;
