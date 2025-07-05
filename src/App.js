import './App.css';
import Navigation from './customer/component/Navigation/navigations'; // ✅ This line is important
import homepages from './customer/Pages/homespage/homepages'; // ✅ This line is important
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <homepages/>
      </div>
       
    </div>
  );
}

export default App;
