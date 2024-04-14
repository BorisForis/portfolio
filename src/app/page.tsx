import Footer from "./Footer";
import Toolbar from "./Toolbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between">
      <Toolbar page="home"/>
      <Footer/>
    </main>
  );
}
