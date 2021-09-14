import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import './App.css';

const bookData = [
  { title: 'Harry Poter', description: 'Wizzards  and stuff' },
  { title: 'Programing with JS', description: 'Code First' },
  { title: 'The Bible', description: 'The God ....' },
  { title: 'Chronicle of Narnia', description: 'Most fantastic book' }
];

function App() {
  return (
    <div className="App">
      <Header>
        <h1>
          Book Library children
        </h1>
      </Header>
      <BookList books={bookData} />
      <Footer />
    </div>
  );
}

export default App;
