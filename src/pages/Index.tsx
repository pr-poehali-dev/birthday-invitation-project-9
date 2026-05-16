import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const card = (delay: string) => ({
    background: "rgba(255,255,255,0.88)",
    backdropFilter: "blur(24px)",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
    transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}`,
  });

  return (
    <div
      className="min-h-screen font-nunito relative overflow-x-hidden"
      style={{
        background: "#f5ede3",
      }}
    >
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 pt-48 pb-12 gap-6">

        {/* Hero */}
        <div
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <h1
            className="font-nunito font-black"
            style={{
              fontSize: "clamp(2rem, 6.5vw, 4rem)",
              color: "#1a1a1a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Приглашаю тебя на<br />день рождения
          </h1>
          <p className="font-nunito font-extrabold text-2xl mt-3" style={{ color: "#1a1a1a" }}>
            Я тебя жду ❤️
          </p>
        </div>

        <div className="w-full max-w-lg flex flex-col gap-5 mt-2">

          {/* Date & Time */}
          <div className="rounded-3xl p-6 shadow-2xl relative overflow-hidden" style={{ ...card("0.15s"), border: "3px solid #FFD93D" }}>
            <div className="absolute -top-3 -right-3 text-4xl" style={{ animation: "star-spin 4s linear infinite" }}>⭐</div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #FFD93D, #FF8C42)" }}>
                📅
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest mb-1" style={{ color: "#FF8C42" }}>Дата и время</p>
                <p className="text-3xl font-pacifico" style={{ color: "#333" }}>6 июня</p>
                <p className="text-2xl font-extrabold" style={{ color: "#9B5DE5" }}>в 16:00 🕓</p>
                <p className="text-sm text-gray-500 mt-1 font-semibold">Суббота — лучший день для праздника!</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-3xl p-6 shadow-2xl relative overflow-hidden" style={{ ...card("0.3s"), border: "3px solid #FF6B9D" }}>
            <div className="absolute -top-3 -right-3 text-4xl">🎀</div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #FF6B9D, #9B5DE5)" }}>
                📍
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest mb-1" style={{ color: "#FF6B9D" }}>Место проведения</p>
                <p className="text-xl font-extrabold" style={{ color: "#333" }}>2-я Чандровская улица, 35</p>
                <a
                  href="https://yandex.ru/maps/?text=2-я+Чандровская+улица+35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl font-bold text-sm text-white transition-transform hover:scale-105 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #FF6B9D, #9B5DE5)" }}
                >
                  <Icon name="Map" size={16} />
                  Открыть на карте
                </a>
              </div>
            </div>
          </div>

          {/* Reminder */}
          <div className="rounded-3xl p-6 shadow-2xl relative overflow-hidden" style={{ ...card("0.45s"), border: "3px solid #6BCB77" }}>
            <div className="absolute -top-3 -right-3 text-4xl" style={{ animation: "balloon-float 3s ease-in-out infinite" }}>🌊</div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6BCB77, #00D4FF)" }}>
                🎒
              </div>
              <div className="w-full">
                <p className="text-xs font-extrabold uppercase tracking-widest mb-3" style={{ color: "#6BCB77" }}>Напоминание</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold" style={{ background: "rgba(0,212,255,0.1)", color: "#0099bb" }}>
                    <span className="text-2xl">👙</span>
                    <span className="text-base">Возьми купальник!</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold" style={{ background: "rgba(255,140,66,0.1)", color: "#c05a00" }}>
                    <span className="text-2xl">🧖</span>
                    <span className="text-base">Будет бассейн и баня</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold" style={{ background: "rgba(255,107,157,0.1)", color: "#c0536a" }}>
                    <span className="text-2xl">👫</span>
                    <span className="text-base">Если будет +1 — предупреди в сообщении</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}