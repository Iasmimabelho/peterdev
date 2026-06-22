import fotoCacaNiquel from '../../imagem/meu.jpeg';
import fotoRobo from '../../imagem/robo.jpeg';
import fotoHistoria from '../../imagem/his.png';
import fotoManhwa from '../../imagem/nebula.png';
import fotoDog from '../../imagem/dog.png';
import fotomimi from '../../imagem/mimi.jpeg';

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
function WebCorner({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[20, 50, 80, 110, 140, 170].map((r, i) => (
        <circle key={i} cx="0" cy="0" r={r} stroke="rgba(204,20,24,0.15)" strokeWidth="1" />
      ))}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={Math.cos(rad) * 200}
            y2={Math.sin(rad) * 200}
            stroke="rgba(204,20,24,0.12)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

// ─── Spider-Man Logo SVG ─────────────────────────────────────────────────────
function SpiderLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#cc1418" stroke="#ff2a2e" strokeWidth="2" />
      {/* eyes */}
      <ellipse cx="35" cy="42" rx="12" ry="9" fill="white" transform="rotate(-15 35 42)" />
      <ellipse cx="65" cy="42" rx="12" ry="9" fill="white" transform="rotate(15 65 42)" />
      {/* web lines on face */}
      <path d="M2 50 Q50 20 98 50" stroke="#900d10" strokeWidth="1.5" fill="none" />
      <path d="M2 50 Q50 80 98 50" stroke="#900d10" strokeWidth="1.5" fill="none" />
      <path d="M50 2 Q30 50 50 98" stroke="#900d10" strokeWidth="1.5" fill="none" />
      <path d="M50 2 Q70 50 50 98" stroke="#900d10" strokeWidth="1.5" fill="none" />
      <path d="M10 15 Q50 40 90 15" stroke="#900d10" strokeWidth="1.2" fill="none" />
      <path d="M10 85 Q50 60 90 85" stroke="#900d10" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative font-rajdhani font-bold text-sm uppercase tracking-widest px-4 py-2 transition-all duration-200",
      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300",
      isActive
        ? "text-[#ff3a3e] after:w-full after:bg-[#cc1418]"
        : "text-[#aaaacc] hover:text-white after:w-0 after:bg-[#cc1418] hover:after:w-full",
    ].join(" ");

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#08080f]/95 backdrop-blur-md border-b border-[#cc1418]/20 shadow-[0_4px_30px_rgba(204,20,24,0.15)]" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <SpiderLogo size={36} />
          <span className="font-bangers text-2xl text-white tracking-wider group-hover:text-[#ff3a3e] transition-colors">
            Peter<span className="text-[#cc1418]">Dev</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {/* NavLink com isActive — exigência do trabalho */}
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/sobre" className={navLinkClass}>Sobre</NavLink>
          <NavLink to="/projetos" className={navLinkClass}>Projetos</NavLink>
        </div>
      </nav>
    </header>
  );
}

// ─── Página: Home ─────────────────────────────────────────────────────────────
function Home() {
  return (
    <main className="relative min-h-screen bg-[#08080f] overflow-hidden flex flex-col items-center justify-center pt-16">
      {/* Web corner decorations */}
      <WebCorner className="absolute top-0 left-0 w-64 h-64 pointer-events-none" />
      <WebCorner className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none rotate-180" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cc1418]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1a3a8f]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Spider-Man emblem grande */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-[#cc1418]/10 border border-[#cc1418]/30 flex items-center justify-center animate-pulse">
              <SpiderLogo size={80} />
            </div>
            <div className="absolute -inset-2 rounded-full border border-[#cc1418]/20 animate-ping" />
          </div>
        </div>

        {/* Tag line */}
        <p className="font-rajdhani text-[#cc1418] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Desenvolvedora Full-Stack & Entusiasta de Hardware
        </p>

        {/* Título principal */}
        <h1 className="font-bangers text-7xl md:text-9xl text-white leading-none tracking-wide mb-2">
          Sua Amigável<br />
          <span className="text-[#cc1418]">Dev</span> da Vizinhança
        </h1>

        <p className="font-rajdhani text-[#8888aa] text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
          Com grandes poderes vêm grandes responsabilidades — e com grandes projetos
          vêm grandes linhas de código. Explore meu portfólio e descubra o que estou construindo.
        </p>

        {/* Skills rápidas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["React", "HTML/CSS", "JavaScript", "Arduino", "Hardware", "Python"].map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3 py-1.5 rounded border border-[#cc1418]/30 text-[#cc1418] bg-[#cc1418]/5 tracking-wider"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA — Link para Sobre (exigência do trabalho) */}
        <Link
          to="/sobre"
          className="inline-flex items-center gap-3 bg-[#cc1418] hover:bg-[#e63946] text-white font-bangers text-2xl tracking-wider px-10 py-4 rounded transition-all duration-200 shadow-[0_0_30px_rgba(204,20,24,0.4)] hover:shadow-[0_0_45px_rgba(204,20,24,0.6)] hover:scale-105 active:scale-95"
        >
          <span>Conhecer Mais</span>
          <span className="text-xl">→</span>
        </Link>

        {/* Scroll hint */}
        <p className="mt-8 font-rajdhani text-[#444466] text-sm uppercase tracking-widest">
          Scroll para explorar
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080f] to-transparent pointer-events-none" />
    </main>
  );
}

function Sobre() {
  const skills = [
    { cat: "Front-End", items: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"] },
    { cat: "Hardware", items: ["Arduino", "Circuitos", "Robótica", "Eletrônica", "Sensores"] },
    { cat: "Back-End", items: ["Node.js", "Python", "REST APIs", "Banco de Dados"] },
    { cat: "Ferramentas", items: ["Git", "VS Code", "Figma", "Linux"] },
  ];

  return (
    <main className="relative min-h-screen bg-[#08080f] overflow-hidden pt-24 pb-20">
      <WebCorner className="absolute top-0 right-0 w-48 h-48 pointer-events-none rotate-90" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#1a3a8f]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">
          <p className="font-rajdhani text-[#cc1418] uppercase tracking-[0.3em] text-sm font-semibold mb-2">
            Sobre Mim
          </p>
          <h1 className="font-bangers text-6xl md:text-7xl text-white tracking-wide">
            Quem é essa <span className="text-[#cc1418]">Heroína?</span>
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-[#cc1418]" />
        </div>

        {/* BIO + FOTO (ARRUMADO) */}
        <div className="grid md:grid-cols-5 gap-12 items-start mb-16">

         <div className="md:col-span-2 flex justify-center md:justify-start">
  
  <img 
  src={fotomimi} 
  alt="Minha foto" 
  className="w-56 h-72 rounded-2xl object-cover border-2 border-[#cc1418]/40 shadow-[0_0_40px_rgba(204,20,24,0.15)]" 
/>
</div>

          {/* TEXTO */}
          <div className="md:col-span-3">
            <p className="font-rajdhani text-[#ccccdd] text-lg leading-relaxed mb-4">
              Olá! Sou uma estudante apaixonada por tecnologia — tanto no mundo do software quanto do hardware.
            </p>

            <p className="font-rajdhani text-[#8888aa] text-base leading-relaxed mb-6">
              Minha jornada começou com circuitos e hoje evolui para desenvolvimento web.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "5+", label: "Projetos Concluídos" },
                { n: "2", label: "Projetos de Hardware" },
                { n: "3", label: "Sites Desenvolvidos" },
              ].map(({ n, label }) => (
                <div key={label} className="bg-[#111120] border border-[#cc1418]/20 rounded-xl p-4 text-center">
                  <p className="font-bangers text-3xl text-[#cc1418]">{n}</p>
                  <p className="font-rajdhani text-[#8888aa] text-xs uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skills.map(({ cat, items }) => (
            <div key={cat} className="bg-[#111120] border border-[#cc1418]/15 rounded-xl p-5">
              <h3 className="font-bangers text-lg text-[#cc1418] mb-3">{cat}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="font-rajdhani text-[#aaaacc] text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc1418]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-3 border-2 border-[#cc1418] text-[#cc1418] hover:bg-[#cc1418] hover:text-white font-bangers text-2xl px-10 py-4 rounded"
          >
            Ver Meus Projetos →
          </Link>
        </div>

      </div>
    </main>
  );
}


const projetos = [
  {
    id: 1,
    emoji: "🎰",
    nome: "Caça-Níquel",
    tipo: "Hardware",
    cor: "#e6a817",
    descricao: "Máquina caça-níquel construída com componentes físicos.",
    tags: ["Arduino", "C++", "Hardware"],
    foto: fotoCacaNiquel, // Use a variável, não texto
    fotoAlt: "Máquina caça-níquel arcade",
  },
  {
    id: 2,
    emoji: "🤖",
    nome: "Robô Autônomo",
    tipo: "Hardware",
    cor: "#5b8fff",
    descricao: "Robô capaz de navegar evitando obstáculos.",
    tags: ["Arduino", "Robótica", "Hardware"],
    foto: fotoRobo,
    fotoAlt: "Meus robôs",
  },
  {
    id: 3,
    emoji: "📚",
    nome: "Site de Historia",
    tipo: "Web",
    cor: "#f97316",
    descricao: "Projeto retrofuturista sobre organização operária.",
    tags: ["HTML", "CSS", "JavaScript"],
    foto: fotoHistoria,
    fotoAlt: "Site de história",
  },
  {
    id: 4,
    emoji: "📖",
    nome: "Site de Manhwa",
    tipo: "Web",
    cor: "#a855f7",
    descricao: "Plataforma de leitura de HQs coreanas.",
    tags: ["HTML", "CSS", "JavaScript"],
    foto: fotoManhwa,
    fotoAlt: "Site de manhwa",
  },
  {
    id: 5,
    emoji: "🐾",
    nome: "ONG de Animais",
    tipo: "Web",
    cor: "#22c55e",
    descricao: "Site para proteção animal e adoção.",
    tags: ["HTML", "CSS", "JavaScript"],
    foto: fotoDog,
    fotoAlt: "Projeto ONG SOS Vida",
  },
];

function Projetos() {
  const [filtro, setFiltro] = useState<"Todos" | "Hardware" | "Web">("Todos");

  const filtrados = filtro === "Todos" ? projetos : projetos.filter((p) => p.tipo === filtro);

  return (
    <main className="relative min-h-screen bg-[#08080f] overflow-hidden pt-24 pb-20">
      <WebCorner className="absolute top-0 left-0 w-56 h-56 pointer-events-none" />
      <WebCorner className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none rotate-180" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#cc1418]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="font-rajdhani text-[#cc1418] uppercase tracking-[0.3em] text-sm font-semibold mb-2">
            Portfólio
          </p>
          <h1 className="font-bangers text-6xl md:text-7xl text-white tracking-wide">
            Meus <span className="text-[#cc1418]">Projetos</span>
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-[#cc1418]" />
        </div>

        {/* Filtro */}
        <div className="flex gap-3 mb-10">
          {(["Todos", "Hardware", "Web"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={[
                "font-rajdhani font-bold text-sm uppercase tracking-widest px-5 py-2 rounded border transition-all duration-200",
                filtro === f
                  ? "bg-[#cc1418] border-[#cc1418] text-white shadow-[0_0_20px_rgba(204,20,24,0.4)]"
                  : "border-[#333355] text-[#8888aa] hover:border-[#cc1418]/40 hover:text-white",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtrados.map((proj) => (
            <div
              key={proj.id}
              className="group bg-[#111120] border border-[#222240] rounded-2xl overflow-hidden hover:border-[#cc1418]/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(204,20,24,0.15)] hover:-translate-y-1 flex flex-col"
            >
              {/* Foto do projeto */}
              <div className="relative h-44 overflow-hidden bg-[#1c1c2e]">
                <img
                  src={proj.foto}
                  alt={proj.fotoAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111120] via-[#111120]/20 to-transparent" />
                {/* Badge tipo */}
                <span
                  className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-full border backdrop-blur-sm"
                  style={{ color: proj.cor, borderColor: `${proj.cor}50`, background: `${proj.cor}20` }}
                >
                  {proj.tipo}
                </span>
                {/* Emoji badge */}
                <div
                  className="absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center text-xl backdrop-blur-sm"
                  style={{ background: `${proj.cor}25`, border: `1px solid ${proj.cor}40` }}
                >
                  {proj.emoji}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-5 flex flex-col flex-1">
                {/* Nome */}
                <h2 className="font-bangers text-2xl text-white tracking-wide mb-2 group-hover:text-[#ff3a3e] transition-colors">
                  {proj.nome}
                </h2>

                {/* Descrição */}
                <p className="font-rajdhani text-[#8888aa] text-sm leading-relaxed mb-4 flex-1">
                  {proj.descricao}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1c1c2e] text-[#6666aa] border border-[#333355]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Link de volta para Home (exigência do trabalho) */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-[#111120] border-2 border-[#cc1418]/40 hover:border-[#cc1418] text-[#cc1418] hover:text-white hover:bg-[#cc1418] font-bangers text-2xl tracking-wider px-10 py-4 rounded transition-all duration-200 hover:shadow-[0_0_35px_rgba(204,20,24,0.4)] hover:scale-105 active:scale-95"
          >
            <span>← Voltar para Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-[#cc1418]/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <SpiderLogo size={24} />
          <span className="font-bangers text-lg text-[#555577] tracking-wider">
            Peter<span className="text-[#cc1418]/60">Dev</span> Portfólio
          </span>
        </div>
        <p className="font-rajdhani text-[#444466] text-sm">
          Desenvolvido com React Router · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

// ─── App Root — BrowserRouter envolvendo toda a aplicação ────────────────────
export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar usa NavLink com isActive */}
      <Navbar />

      {/* Routes agrupa todas as rotas */}
      <Routes>
        {/* Route mapeia cada caminho ao componente */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
