import "./App.css";
import LeftSection from "./components/LeftSection";
import PromoBanner from "./components/PromoBanner";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="main-container">
      <LeftSection />
      <div className="right-section">
        <PromoBanner />
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
