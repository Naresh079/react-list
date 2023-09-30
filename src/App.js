import logo from "./logo.svg";
import "./App.css";
const users = [
  {
    name: "naresh",
    designation: "developper",
  },
  {
    name: "girish",
    designation: "developper",
  },
];
const bgStyle = {
  backgroundColor: "blue",
  padding: "50px",
  margin: "50px",
};
const UserComponent = (props) => {
  const { name, designation } = props;
  return (
    <div className="card box bg-dark" style={bgStyle}>
      <img
        src="https://th.bing.com/th/id/OIP.iraUrk06_JovrbaIkel-YAHaEK?pid=ImgDet&rs=1"
        alt=""
      />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ul>
        {users.map((user) => {
          return <UserComponent {...user} />;
        })}
      </ul>

      <h1>hii</h1>
    </div>
  );
}

export default App;
