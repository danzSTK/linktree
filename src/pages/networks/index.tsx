import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

const Networks = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  type Social = { facebook: string; instagram: string; youtube: string };

  useEffect(() => {
    const loadLinks = () => {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          const data = doc.data() as Social;

          setFacebook(data.facebook);
          setInstagram(data.instagram);
          setYoutube(data.youtube);
        }
      });

    };
    
    loadLinks();
  }, []);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook,
      instagram,
      youtube,
    })
      .then(() => {
        alert("Redes sociais salvas com sucesso!");
      })
      .catch((error) => {
        alert("Erro ao salvar as redes sociais!" + error);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form onSubmit={handleRegister} className="flex flex-col w-full max-w-xl">
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Link do facebook
        </label>
        <Input
          type="url"
          placeholder="Digite o link do facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Link do instagram
        </label>
        <Input
          type="url"
          placeholder="Digite o link do facebook..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Link do youtube
        </label>
        <Input
          type="url"
          placeholder="Digite o link do facebook..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mt-3 font-medium"
          type="submit"
        >
          Salvar redes sociais
        </button>
      </form>
    </div>
  );
};

export default Networks;
