// const Mensagem = ({ mensagem }) => {
//   const isBot = mensagem.remetente === "bot";

//   return (
//     <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
//       <div
//         className={`max-w-xs lg:max-w-md px-5 py-4 rouded-2xl shadow-2xl hover:shadow-xl cursor-pointer
//                 ${
//                   isBot
//                     ? "bg-gray-50 text-gray-800 rounded-br-2xl border border-gray-300"
//                     : "bg-gradient-to-r from-purple-300 to-emerald-400 text-white rounded-tl-2xl"
//                 }
//                 `}
//       >
//         <p className="text-sm whitespace-pre-line">{mensagem.texto}</p>
//       </div>
//     </div>
//   );
// };

// export default Mensagem;

import { useState } from "react";

const Mensagem = ({ mensagem }) => {
  const isBot = mensagem.remetente === "bot";
  const [copiado, setCopiado] = useState(false);

  const copiarTexto = () => {
    navigator.clipboard.writeText(mensagem.texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000); // Remove a mensagem "Copiado" após 2s
  };

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-5 py-4 rounded-2xl shadow-2xl hover:shadow-xl cursor-pointer
                ${
                  isBot
                    ? "bg-gray-50 text-gray-800 rounded-br-2xl border border-gray-300"
                    : "bg-gradient-to-r from-purple-300 to-emerald-400 text-white rounded-tl-2xl"
                }
                `}
      >
        <p className="text-sm whitespace-pre-line">{mensagem.texto}</p>

        {isBot && (
          <button
            onClick={copiarTexto}
            className="mt-2 text-xs text-gray-500 hover:text-gray-700"
          >
            {copiado ? "✅ Copiado!" : "📋 Copiar"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Mensagem;

