import { useState } from "react";

const ChatBox = ({ onEnviarMensagem, desabilitado }) => {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onEnviarMensagem(mensagem);
    setMensagem("");
  };

  return (
    <div className="border-t border-gray-200 bg-gray-50/80 py-4 px-1 overflow-x-hidden">
      <form className="flex space-x-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Qual a receita?"
          disabled={desabilitado}
          className="flex-1 px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-purple-500 outline-none"
        />
        <button
          type="submit"
          disabled={desabilitado}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-700 hover:to-emerald-700 text-white rounded-full disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
