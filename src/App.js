import { useState } from "react";
import { card } from "./constants";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const [input, setInput] = useState({
    fname: undefined,
    lname: undefined,
    gender: undefined,
    age: undefined,
    dob: undefined,
    email: undefined,
    password: undefined,
    confirm_password: undefined,
    phone_number: undefined,
    address: undefined,
    state: undefined,
    pincode: undefined,
    Hobbies: undefined,
    checkbox: undefined,
  });
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const checkPassword = () => {
    if (input.password === input.confirm_password) {
      setCheck(true);
      setError(false);
      setPopUp(true);
    } else {
      setError(true);
      setCheck(false);
      setPopUp(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (
      input.fname.length <= 1 &&
      input.lname.length <= 1 &&
      input.gender.length <= 1 &&
      input.age.length <= 1 &&
      input.dob.length <= 1 &&
      input.email.length <= 1 &&
      input.password.length <= 8 &&
      input.confirm_password.length <= 8 &&
      input.phone_number.length <= 1 &&
      input.address.length <= 1 &&
      input.state.length <= 1 &&
      input.pincode.length <= 1 &&
      input.Hobbies.length <= 1 &&
      input.checkbox.length <= 1
    ) {
      console.log(input);
    }
    checkPassword();
  };

  const handleReset = () => {
    setInput({});
    setCheck(false);
    setPopUp(false);
  };
  return (
    <div className="wrapper">
      <div className="title">Student Registration htmlForm</div>
      <form action="POST" method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="form 1" />
        <div className="form">
          <div className="inputfield">
            <label>First Name</label>
            <input
              type="text"
              className="input"
              id="name"
              name="fname"
              value={input.fname}
              onChange={handleChange}
              placeholder="Enter first name"
              maxLength={30}
              pattern="[A-Za-z]{1,32}"
              title="Enter only alphabets"
              required
            />
          </div>

          <div className="inputfield">
            <label>Last Name</label>
            <input
              type="text"
              className="input"
              id="name"
              name="lname"
              value={input.lname}
              onChange={handleChange}
              placeholder="Enter last name"
              maxLength={30}
              pattern="[A-Za-z]{1,32}"
              title="Enter only alphabets"
              required
            />
          </div>
          <div className="inputfield" id="gender">
            <label htmlFor="">Gender</label>
            <input
              type="radio"
              name="gender"
              id="radio"
              value={input.gender}
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              id="radio"
              value={input.gender}
              onChange={handleChange}
            />
            Female
          </div>
          <div className="inputfield">
            <label htmlFor="">Age</label>
            <input
              type="text"
              className="input"
              name="age"
              placeholder="Enter your age"
              maxLength={2}
              pattern="^[0-9]{2}$"
              value={input.age}
              onChange={handleChange}
              required
              title="Enter numbers only"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="">Date of Birth</label>
            <input
              type="date"
              className="input"
              name="dob"
              value={input.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label>Email Address</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Enter your email"
              value={input.email}
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              required
            />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input
              type="password"
              className="input"
              id="password"
              name="password"
              placeholder="Enter your password min 8 characters"
              autoComplete="off"
              value={input.password}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              maxLength={100}
              minLength={8}
              required
            />
          </div>
          <div className="inputfield">
            <label>Confirm Password</label>
            <input
              type="password"
              className="input"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm password"
              autoComplete="off"
              value={input.confirm_password}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              maxLength={100}
              minLength={8}
              required
            />
          </div>
          {check && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              Password match
            </p>
          )}
          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              Password not match
            </p>
          )}

          <div className="inputfield">
            <label htmlFor="">Phone Number</label>
            <div className="custom-select" id="phone-codes">
              <select id="phone-code">
                <option value="+91">+91</option>
              </select>
            </div>
            <input
              type="tel"
              className="input"
              name="phone_number"
              maxLength={10}
              id="phone-number"
              placeholder="Enter your phone number"
              pattern="[7-9]{1}[0-9]{9}"
              value={input.phone_number}
              onChange={handleChange}
              title="Please enter valid phone number"
            />
          </div>
          <div className="inputfield">
            <label>Address</label>
            <textarea
              className="textarea"
              name="address"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your address"
              value={input.address}
              onChange={handleChange}
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$"
              maxLength={100}
              required
            ></textarea>
          </div>
          <div className="inputfield">
            <label>State</label>
            <div className="custom_select">
              <select
                id="state"
                name="state"
                value={input.state}
                onChange={handleChange}
                required
              >
                {card.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.text}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label>Pin Code</label>
            <input
              type="text"
              className="input"
              name="pincode"
              placeholder="Enter your pin code"
              maxLength={6}
              pattern="^[0-9]{6}$"
              value={input.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield" id="hobbies">
            <label htmlFor="">Hobbies</label>
            <div className="hobbies">
              <input
                type="checkbox"
                name="Hobbies"
                id=""
                value={input.Hobbies}
                onChange={handleChange}
              />
              <label htmlFor="">Music</label>
              <input
                type="checkbox"
                name="Hobbies"
                id=""
                value={input.Hobbies}
                onChange={handleChange}
              />
              <label htmlFor="">Movies</label>
              <input
                type="checkbox"
                name="Hobbies"
                id=""
                value={input.Hobbies}
                onChange={handleChange}
              />
              <label htmlFor="">Sports</label>
              <input
                type="checkbox"
                name="Hobbies"
                id=""
                value={input.Hobbies}
                onChange={handleChange}
              />
              <label htmlFor="">Travel</label>
            </div>
          </div>
          <div className="inputfield">
            <label>Upload Photo</label>
            <p id="file-size">*Max size 100kb.</p>
            <input
              placeholder="Upload your photo"
              rows="7"
              type="file"
              name="file"
              required
            />
          </div>
          <div className="inputfield terms">
            <label className="check">
              <input
                type="checkbox"
                name="check"
                value={input.checkbox}
                onChange={handleChange}
                required
              />
              <span className="checkmark"></span>
            </label>
            <p>
              I hereby declare that the above inhtmlFormation provided is true
              and correct.
            </p>
          </div>

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleChange}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <div className="inputfield btns" id="btn">
            <button type="submit" value="Register" className="btn">
              Register
            </button>
            <button
              type="reset"
              value="Reset"
              className="btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className={popUp === true ? "pop-up pop-up-display " : "pop-up "}>
          <h2>Registration Success</h2>
          <button type="reset" onClick={handleReset}>
            ok
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
