const Welcome = (a) => {
  return (
    <p>
      안녕하세요 {a.username} 저는 {a.userage} 세 입니다
    </p>
  );
};

function App() {
  return (
    <div>
      <Welcome username="홍길동" userage="33"></Welcome>
      <Welcome username="고길동" userage="33"></Welcome>
      <Welcome username="둘리" userage="33"></Welcome>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
