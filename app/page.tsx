import Main from "./components/Main/main";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <main style={{background:'#e8ecf0'}}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
