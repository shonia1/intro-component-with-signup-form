import { useState } from "react";
import errorIcon from "../assets/images/icon-error.svg";
import "../App.css";

export default function SignupForm() {
  // ვქმნით ობიექტს ველების მნიშვნელობებისთვის
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // ვქმნით ობიექტს ერორების სტატუსისთვის (თავიდან ყველაფერი ფოლსია)
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  // ფუნქცია, რომელიც ინფუთში წერისას ანახლებს სტეიტს
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // როგორც კი მომხმარებელი წერას დაიწყებს, ამ ველის ერორს ვაქრობთ
    setErrors({ ...errors, [name]: false });
  };

  // ღილაკზე დაჭერისას (ფორმის საბმითისას) გაშვებული ლოგიკა
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@"), // მარტივი იმეილის შემოწმება
      password: formData.password.trim() === "",
    };

    setErrors(newErrors);

    // თუ არცერთი ერორი არ არის, ფორმა წარმატებით გაიგზავნა
    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.email &&
      !newErrors.password
    ) {
      alert("Form submitted successfully! 🚀");
    }
  };
  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* First Name ველი */}
        <div className={`input-container ${errors.firstName ? "error" : ""}`}>
          <input
            type="text"
            name="firstName"
            placeholder={errors.firstName ? "" : "First Name"}
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <img src={errorIcon} alt="Error" className="error-icon" />
          )}
          {errors.firstName && (
            <span className="error-text">First Name cannot be empty</span>
          )}
        </div>

        {/* Last Name ველი */}
        <div className={`input-container ${errors.lastName ? "error" : ""}`}>
          <input
            type="text"
            name="lastName"
            placeholder={errors.lastName ? "" : "Last Name"}
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <img src={errorIcon} alt="Error" className="error-icon" />
          )}
          {errors.lastName && (
            <span className="error-text">Last Name cannot be empty</span>
          )}
        </div>

        {/* Email ველი */}
        <div className={`input-container ${errors.email ? "error" : ""}`}>
          <input
            type="text"
            name="email"
            placeholder={errors.email ? "" : "Email Address"}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <img src={errorIcon} alt="Error" className="error-icon" />
          )}
          {errors.email && (
            <span className="error-text">Looks like this is not an email</span>
          )}
        </div>

        {/* Password ველი */}
        <div className={`input-container ${errors.password ? "error" : ""}`}>
          <input
            type="password"
            name="password"
            placeholder={errors.password ? "" : "Password"}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <img src={errorIcon} alt="Error" className="error-icon" />
          )}
          {errors.password && (
            <span className="error-text">Password cannot be empty</span>
          )}
        </div>

        <button type="submit">CLAIM YOUR FREE TRIAL</button>

        <p className="terms-text">
          By clicking the button you are agreeing to our{" "}
          <a href="#">Terms and Services</a>{" "}
        </p>
      </form>
    </>
  );
}
