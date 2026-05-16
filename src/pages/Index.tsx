import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const CONFETTI_COLORS = [
  "#FF6B9D", "#FFD93D", "#9B5DE5", "#00D4FF", "#FF8C42", "#6BCB77",
  "#FF4757", "#FFA502", "#2ED573", "#1E90FF", "#FF6348", "#ECCC68",
];

const CONFETTI_SHAPES = ["circle", "rect", "triangle"];

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  shape: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      shape: CONFETTI_SHAPES[Math.floor(Math.random() * CONFETTI_SHAPES.length)],
      size: Math.random() * 10 + 6,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 6,
      rotation: Math.random() * 360,
    }));
    setPieces(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.x}%`,
            animation: `confetti-fall ${p.duration}s ${p.delay}s linear infinite`,
          }}
        >
          {p.shape === "circle" && (
            <div
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                borderRadius: "50%",
                transform: `rotate(${p.rotation}deg)`,
              }}
            />
          )}
          {p.shape === "rect" && (
            <div
              style={{
                width: p.size,
                height: p.size * 0.6,
                backgroundColor: p.color,
                transform: `rotate(${p.rotation}deg)`,
              }}
            />
          )}
          {p.shape === "triangle" && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${p.size / 2}px solid transparent`,
                borderRight: `${p.size / 2}px solid transparent`,
                borderBottom: `${p.size}px solid ${p.color}`,
                transform: `rotate(${p.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Balloon({ x, delay, emoji }: { x: string; delay: string; emoji: string }) {
  return (
    <div
      className="absolute bottom-0 select-none pointer-events-none"
      style={{ left: x, animation: `balloon-float 3.5s ${delay} ease-in-out infinite` }}
    >
      <div className="text-6xl md:text-7xl">
        {emoji}
      </div>
    </div>
  );
}

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen font-nunito relative overflow-x-hidden"
      style={{
        background: "#0f0c29",
        backgroundImage: `
          radial-gradient(ellipse at 20% 20%, rgba(155, 93, 229, 0.45) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 10%, rgba(255, 107, 157, 0.35) 0%, transparent 45%),
          radial-gradient(ellipse at 60% 80%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 10% 70%, rgba(255, 140, 66, 0.25) 0%, transparent 40%)
        `,
      }}
    >
      <Confetti />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Balloon x="3%" delay="0s" emoji="🎈" />
        <Balloon x="88%" delay="0.8s" emoji="🎀" />
        <Balloon x="75%" delay="1.5s" emoji="🎈" />
        <Balloon x="15%" delay="2s" emoji="🎉" />
        <Balloon x="50%" delay="0.4s" emoji="🎊" />
        <Balloon x="92%" delay="1.2s" emoji="🎈" />
        <Balloon x="30%" delay="2.5s" emoji="⭐" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-12 gap-6">

        {/* Hero */}
        <div
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="text-6xl mb-2 inline-block" style={{ animation: "wiggle 1s ease-in-out infinite" }}>🎉</div>
          <h1
            className="font-pacifico text-white drop-shadow-lg"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", textShadow: "3px 3px 0px rgba(0,0,0,0.15)" }}
          >
            Вы приглашены!
          </h1>
          <p className="text-white/90 font-nunito font-bold text-xl mt-2" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
            Приходите, будет весело! 🥳
          </p>
        </div>

        <div className="w-full max-w-lg flex flex-col gap-5 mt-2">

          {/* Date & Time */}
          <div
            className="rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.93)",
              backdropFilter: "blur(20px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s",
              border: "3px solid #FFD93D",
            }}
          >
            <div className="absolute -top-3 -right-3 text-4xl" style={{ animation: "star-spin 4s linear infinite" }}>⭐</div>
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #FFD93D, #FF8C42)" }}
              >
                📅
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest mb-1" style={{ color: "#FF8C42" }}>
                  Дата и время
                </p>
                <p className="text-3xl font-pacifico" style={{ color: "#333" }}>6 июня</p>
                <p className="text-2xl font-extrabold" style={{ color: "#9B5DE5" }}>в 16:00 🕓</p>
                <p className="text-sm text-gray-500 mt-1 font-semibold">Суббота — лучший день для праздника!</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div
            className="rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.93)",
              backdropFilter: "blur(20px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
              border: "3px solid #FF6B9D",
            }}
          >
            <div className="absolute -top-3 -right-3 text-4xl">🎀</div>
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #FF6B9D, #9B5DE5)" }}
              >
                📍
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest mb-1" style={{ color: "#FF6B9D" }}>
                  Место проведения
                </p>
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

          {/* Contacts */}
          <div
            className="rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.93)",
              backdropFilter: "blur(20px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s",
              border: "3px solid #9B5DE5",
            }}
          >
            <div className="absolute -top-3 -right-3 text-4xl" style={{ animation: "balloon-float 3s ease-in-out infinite" }}>🎊</div>
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #9B5DE5, #00D4FF)" }}
              >
                💬
              </div>
              <div className="w-full">
                <p className="text-xs font-extrabold uppercase tracking-widest mb-3" style={{ color: "#9B5DE5" }}>
                  Связь с организатором
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+79001234567"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                    style={{ background: "linear-gradient(135deg, #6BCB77, #00D4FF)" }}
                  >
                    <Icon name="Phone" size={18} />
                    <span>Позвонить</span>
                  </a>
                  <a
                    href="https://t.me/username"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                    style={{ background: "linear-gradient(135deg, #00D4FF, #9B5DE5)" }}
                  >
                    <Icon name="MessageCircle" size={18} />
                    <span>Написать в Telegram</span>
                  </a>
                  <a
                    href="https://wa.me/79001234567"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                    style={{ background: "linear-gradient(135deg, #6BCB77, #FFD93D)" }}
                  >
                    <Icon name="MessageSquare" size={18} />
                    <span>Написать в WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div
          className="text-center mt-4 pb-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}
        >
          <p className="text-white/90 font-semibold text-lg" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
            Ждём вас с нетерпением! 🎈🎈🎈
          </p>
        </div>

      </div>
    </div>
  );
}