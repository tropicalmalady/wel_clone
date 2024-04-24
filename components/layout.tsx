import Cursor from "./builder/cursor";
import Lenis from "./view/misc/lenis";
import ContactSection from "./view/shared/contact";
import Footer from "./view/shared/footer";
import Nav from "./view/shared/nav";
import OfferSection from "./view/shared/offer";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <Lenis>
      <>
      <Cursor/>
      <Nav />
      {children}
      <OfferSection />
      <ContactSection />
      <Footer />
      </>
    </Lenis>
  );
}
