import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";



export default function RootPage() {


  return (
    <div className="min-h-full flex flex-col">
        <Hero/>
        <Features/>
        <FAQ/>
        <Footer/>

    </div>
  );
}
