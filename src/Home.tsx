import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Homeページ</h1>
      <div>
        <Link to={'/PatternA001'}>名刺テンプレートA001を開く</Link>
      </div>
      <div>
        <Link to={'/PatternA002'}>名刺テンプレートA002を開く</Link>
      </div>
      <div>
        <Link to={'/PatternB101'}>名刺テンプレートB101を開く</Link>
      </div>
      <div>
        <Link to={'/PatternB102'}>名刺テンプレートB102を開く</Link>
      </div>
    </div>
  );
}

export default Home;