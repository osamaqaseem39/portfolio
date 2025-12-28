import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      
    </main>
  );
}

