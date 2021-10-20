import Snippets from "./commponents/Snippets";
import Welcome from "./commponents/Welcome";

function App() {
  return (
    <div>
      <Welcome username="홍길동" userage="33"></Welcome>
      <Welcome username="고길동" userage="33"></Welcome>
      <Welcome username="둘리" userage="33"></Welcome>
      <Snippets></Snippets>
    </div>
  );
}

export default App;
