import Main from "./components/Main/main";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <main style={{background:'#e8ecf0', color:'#2d2d2d'}}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
