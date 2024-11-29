import "./styles.css";
import "./components/Dropdown";
import Dropdown from "./components/Dropdown";
import Dropdownp from "./components/DropDownPractice";
import InfiniteScroll from "./components/InfiniteScroll";
import DarkMode from "./components/DarkMode/DarkMode";
import SearchWithDebounce from "./components/SearchWithDebounce";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Dropdown /> */}
      {/* <Dropdownp /> */}
      {/* <InfiniteScroll /> */}
      {/* <DarkMode /> */}
      {/* <SearchWithDebounce /> */}
      <Leaderboard />
    </div>
  );
}
