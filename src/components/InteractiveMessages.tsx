import React, { useState } from 'react';
import { Mail, Heart, Star, Gift } from 'lucide-react';

interface Message {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}

const InteractiveMessages: React.FC = () => {
  const [openMessages, setOpenMessages] = useState<Set<number>>(new Set());

  const messages: Message[] = [
    {
      id: 1,
      title: "Primer Recuerdo",
      content: "Recuerdo perfectamente nuestro primer encuentro. Tus ojos brillaron como estrellas y supe inmediatamente que eras especial. Ese momento cambió mi vida para siempre.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 2,
      title: "Lo Que Más Amo",
      content: "Amo tu sonrisa que ilumina mis días, tu risa que es música para mis oídos, y tu forma única de hacer que todo sea mejor. Eres mi persona favorita en todo el universo.",
      icon: <Star className="w-6 h-6" />,
      color: "from-rose-400 to-pink-400"
    },
    {
      id: 3,
      title: "Nuestros Planes",
      content: "Sueño con todos los lugares que visitaremos juntos, las aventuras que viviremos y los recuerdos que crearemos. Contigo, el futuro se ve brillante y lleno de amor.",
      icon: <Gift className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 4,
      title: "Promesa de Amor",
      content: "Te prometo amarte cada día más que el anterior, cuidar de tu corazón como el tesoro más preciado, y construir contigo la historia de amor más hermosa.",
      icon: <Mail className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const toggleMessage = (id: number) => {
    const newOpenMessages = new Set(openMessages);
    if (newOpenMessages.has(id)) {
      newOpenMessages.delete(id);
    } else {
      newOpenMessages.add(id);
    }
    setOpenMessages(newOpenMessages);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-pink-700 mb-4">
            Mensajes del Corazón
          </h3>
          <p className="text-gray-600 text-lg">
            Cada sobre contiene un pedacito de mi alma para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                onClick={() => toggleMessage(message.id)}
                className={`cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  openMessages.has(message.id) ? 'rotate-2' : 'hover:rotate-1'
                }`}
              >
                <div className={`bg-gradient-to-br ${message.color} p-1 rounded-2xl shadow-lg`}>
                  <div className="bg-white rounded-xl p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${message.color} text-white shadow-lg`}>
                        {message.icon}
                      </div>
                      <div className={`transform transition-transform duration-300 ${
                        openMessages.has(message.id) ? 'rotate-180' : ''
                      }`}>
                        <div className="w-6 h-6 border-2 border-pink-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      {message.title}
                    </h4>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      openMessages.has(message.id) ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
                    }`}>
                      <p className="text-gray-600 leading-relaxed">
                        {openMessages.has(message.id) ? message.content : `${message.content.substring(0, 80)}...`}
                      </p>
                    </div>
                    
                    {!openMessages.has(message.id) && (
                      <div className="mt-4 text-pink-500 text-sm font-medium">
                        Toca para abrir 💕
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMessages;