import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { FiTrash } from "react-icons/fi";

import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
} from "firebase/firestore";

type LinkProps = {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
};
const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundInput, setBackgroundInput] = useState("#121212");
  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryReferencia = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryReferencia, (snapshot) => {
      const lista: LinkProps[] = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        };
      });

      setLinks(lista);
      console.log(lista);
    });

    return () => unsub();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    if (nameInput === "" || urlInput === "") {
      alert("Preencha todos os campos");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        console.log("Cadastrado com sucesso");
      })
      .catch((e) => {
        console.log("Erro ao cadastrar no banco" + e);
      });
  }


  async function handleDeleteLink(id: string) {
    const docRef =  doc(db, "links", id);
    await deleteDoc(docRef)
      .then(() => {
        console.log("Deletado com sucesso");
      })
      .catch((e) => {
        console.log("Erro ao deletar no banco" + e);
      });
  }

  return (
    <div className="flex flex-col min-h-screen items-center pb-7 px-2">
      <Header />

      <form
        onSubmit={handleRegister}
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
      >
        <label className="text-white font-medium mt-2 mb-2" htmlFor="linkName">
          Nome do link
        </label>
        <Input
          type="text"
          placeholder="Digite o nome do link..."
          id="linkName"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2" htmlFor="customUrl">
          Url do link
        </label>
        <Input
          type="url"
          placeholder="Digite a url do link..."
          id="customUrl"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5 justify-center">
          <div className="flex gap-2 items-center">
            <label
              className="text-white font-medium mt-2 mb-2"
              htmlFor="linkTextColor"
            >
              Cor do link
            </label>

            <input
              type="color"
              id="linkTextColor"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>

          <div className="flex gap-2 items-center ">
            <label
              className="text-white font-medium mt-2 mb-2"
              htmlFor="linkTextColor"
            >
              Fundo do link
            </label>

            <input
              type="color"
              id="linkTextColor"
              value={backgroundInput}
              onChange={(e) => setBackgroundInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
            <label className="text-white font-medium mt-2 mb-3" htmlFor="">
              Previws
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundInput,
              }}
            >
              <p className="font-medium" style={{ color: textColorInput }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}

        <button
          type="submit"
          className="mb-7 cursor-pointer bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white mb-4 text-2xl">Meus links</h2>

      {links.map((link) => (
        <article
          className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
          style={{ backgroundColor: link.bg, color: link.color }}
          key={link.id}
        >
          <p>{link.name}</p>
          <div>
            <button
              type="button"
              onClick={() => handleDeleteLink(link.id)}
              className="border border-dashed p-1 rounded"
            >
              <FiTrash size={18} color="#eeeee" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Admin;
