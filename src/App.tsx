import "./App.css";
import ColumnList from "./components/ColumnList";

const App = () => {
  // let userName = prompt("Введите имя пользователя", "user");
  const userName = "User";

  return (
    <div className="App">
      <ColumnList user={userName} />
    </div>
  );
};

export default App;
