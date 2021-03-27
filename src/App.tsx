import "./App.css";
import ColumnList from "./components/ColumnList";

const App = () => {
  // let userName = prompt("Введите имя пользователя", "user");
  const userName = "user";

  return (
    <div className="App">
      <ColumnList user={userName} />
    </div>
  );
};

export default App;
