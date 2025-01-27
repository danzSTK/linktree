import { useEffect, useState } from "react";
import Social from "../../components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

type LinkProps = {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
};

type SocialLinksProps = {
  youtube: string;
  facebook: string;
  instagram: string;
};

const Home = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        const linkList: LinkProps[] = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            bg: doc.data().bg,
            color: doc.data().color,
            name: doc.data().name,
            url: doc.data().url,
          };
        });

        setLinks(linkList);
      });
    }

    loadLinks();

    console.log(links);
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Daniel Félix{" "}
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section
            key={link.id}
            className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105"
            style={{ backgroundColor: link.bg }}
          >
            <a href={link.url} target="_blank">
              <p className="text-base md:text-lg" style={{ color: link.color }}>
                {" "}
                {link.name}{" "}
              </p>
            </a>
          </section>
        ))}

        <footer className="flex justify-center gap-3 my-4">
          <Social url="https://www.facebook.com/danielfelix.dev">
            <FaFacebook size={35} color="#fff" />
          </Social>
          <Social url="https://www.instagram.com/danielfelix.dev/">
            <FaInstagram size={35} color="#fff" />
          </Social>
          <Social url="https://www.youtube.com/channel/UC1234567890abcdef">
            <FaYoutube size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
};

export default Home;
