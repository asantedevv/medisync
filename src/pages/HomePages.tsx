import Hero from "./Hero"
import Services from "./Services"
import ContactUs from "./ContactUs"

const HomePages = () => {
   return (
      <>
         <div id="hero">
            <Hero />
         </div>
         <div id="services">
            <Services />
         </div>
         <div id="contact">
            <ContactUs />
         </div>
      </>
   )
}

export default HomePages
