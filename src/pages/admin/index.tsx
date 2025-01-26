import { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundInput, setBackgroundInput] = useState("#121212");

  return (
    <div className="flex flex-col min-h-screen items-center pb-7 px-2">
      <Header />
      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
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
            <p style={{ color: textColorInput }}>Canal do Youtube</p>
          </article>
        </div>
      </form>
    </div>
  );
};

export default Admin;
