import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
  ];
  return (
    <>
      <div>
        <Header />
        <Banner />
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-12 bg-teal-500/30">
          {items.map((item) => (
            <Item key={item.id} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
