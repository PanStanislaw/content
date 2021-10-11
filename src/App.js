import { useSelector } from 'react-redux';
import Menu from './components/Menu.jsx';
import Content from './components/Content.jsx';

function App() {
  const content = useSelector(({ add }) => add.content);
  return (
    <div className="App">
      <Menu />
      <Content content={content} />
    </div>
  );
}

export default App;
