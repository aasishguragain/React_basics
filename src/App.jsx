import "./App.css";
import Card from "./Components/Card";

const cards = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Qq5RL_Fz8AtIyfUDFKoGdNqhHRGf-ZbNfXJ44nbcw9BmB-SI4tEG-JRx94vincN6X18&usqp=CAU",
    name: "Hari Bahadur",
    age: "69",
    gender: "Male",
    location: "Kathmandu",
    contact: "98456969",
    facebookIcon:
      "https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png",
    facebookLink: "https://fb.com",
    gitLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
  },
  {
    img: "https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/322719015_683325526660860_562956357070978448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aHzMsb6ylrUAX_nbcjQ&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBqTa-1CK5gVlNWSSAtQ7fbk3v49DZJyh50u18zT1NaUg&oe=64D17C95",
    name: "Aasish Guragain",
    age: "23",
    gender: "Male",
    location: "Jhapa",
    contact: "98696969",
    facebookIcon:
      "https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png",
    facebookLink: "https://fb.com",
    gitLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
  },
];

function App() {
  return (
    <div className="main-div">
      {cards.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
}

export default App;
