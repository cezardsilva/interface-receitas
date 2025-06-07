import { useState } from "react";
import ListaMensagens from "../components/ListaMensagens";
import ChatBox from "../components/ChatBox";
import { api } from "../services/api";

const ChatReceitas = () => {
  const [loading, setLoading] = useState(false);
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      texto: "Olá sou sua assistente de receitas. Como posso ajudar hoje?",
      remetente: "bot",
    },
  ]);

  const onEnviarMensagem = async (mensagem) => {
    const novaMensagemUsuario = {
      id: Date.now(),
      texto: mensagem,
      remetente: "usuario",
    };

    setMensagens((prev) => [...prev, novaMensagemUsuario]);
    setLoading(true);

    try {
      const resposta = await api(mensagem);

      const novaMensagemBot = {
        id: Date.now() + 1,
        texto: resposta,
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, novaMensagemBot]);
    } catch (err) {
      console.error(err);
      const novaMensagem = {
        id: Date.now(),
        texto: "Falha ao enviar, tente novamente",
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, novaMensagem]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-br from-purple-200 via-gray-50 to-emerald-50 p-4 flex">
      <div className="mx-auto max-w-4xl w-full flex flex-col h-full">
        {/* Header - altura fixa */}
        <header className="text-center mb-8 flex-shrink-0">
          <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">
            👨‍🍳 Master Chef
          </h1>
          <p className="text-gray-600 text-base lg:text-lg">
            Seu assistente pessoal para receitas deliciosas
          </p>
        </header>

        {/* Container do chat - ocupa o restante do espaço */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 flex flex-col flex-1 min-h-0">
          {/* Área de mensagens com scroll */}
          <div className="flex-1 overflow-y-auto p-4">
            <ListaMensagens mensagens={mensagens} loading={loading} />
          </div>

          {/* Input - fixo na parte inferior */}
          <div className="flex-shrink-0 p-4 border-t border-gray-200">
            <ChatBox
              onEnviarMensagem={onEnviarMensagem}
              desabilitado={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatReceitas;
