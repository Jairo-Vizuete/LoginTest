import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import PorJoder from "./components/por.joder";

import UsersJSON from "./sample/users.json";
import { getDefaultNormalizer } from "@testing-library/react";

class App extends Component {
  state = {
    Users: UsersJSON,
  };

  addUser = (email, password) => {
    // console.log(email, password);
    const newUser = {
      id:this.state.Users.length,
      email : email,
      password : password
    }
    console.log(newUser)
    this.setState({
      Users: [...this.state.Users, newUser]
    })
    console.log(this.state.Users)
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                Tesis Vizuete Jairo
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
              <Link className="navbar-brand" to={"/por-joder"}>
                Ésta es por joder
              </Link>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login adduser={this.addUser}/>} />
                <Route
                  path="/sign-in"
                  element={<Login adduser={this.addUser} />}
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/por-joder" element={<PorJoder />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

// function App() {
//   state = {
//     Users: UsersJSON,
//   };
//   console.log(Users);
//   addUser = () => {
//     console.log("Adding a new user");
//   };

//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={"/sign-in"}>
//               Tesis Vizuete Jairo
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <Link className="navbar-brand" to={"/por-joder"}>
//               Ésta es por joder
//             </Link>
//           </div>
//         </nav>
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//               <Route path="/por-joder" element={<PorJoder />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;
