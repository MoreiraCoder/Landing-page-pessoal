import React, { useState } from "react";

const links = [
  ["Home", "#home"],
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Tecnologias", "#tecnologias"],
  ["Contato", "#contato"],
];

const projetos = [
  {
    nome: "Ofício",
    desc: "Landing page para ateliê de móveis, com seletor de acabamentos em tempo real e ilustrações em SVG.",
    tags: ["HTML", "CSS", "JavaScript"],
    art: (
      <>
        <path d="M60 170 L140 60 L220 170 Z" />
        <circle cx="310" cy="80" r="32" />
        <rect x="270" y="130" width="80" height="40" rx="4" />
      </>
    ),
  },
  {
    nome: "Fiore Gelatto",
    desc: "Site institucional para gelateria comercial feito com Tailwind CSS em arquivo único.",
    tags: ["Tailwind CSS", "HTML5"],
    art: (
      <>
        <circle cx="200" cy="110" r="50" />
        <circle cx="200" cy="110" r="30" />
        <rect x="70" y="60" width="70" height="100" rx="4" />
      </>
    ),
  },
  {
    nome: "Black Gold",
    desc: "Plataforma de agendamento para barbearia, com fluxo intuitivo e detalhes refinados.",
    tags: ["React", "CSS"],
    art: (
      <>
        <rect x="60" y="50" width="80" height="120" rx="6" />
        <rect x="160" y="70" width="80" height="100" rx="6" />
        <rect x="260" y="90" width="70" height="80" rx="6" />
      </>
    ),
  },
];

/* Logos oficiais (devicon). Para produção, baixe os SVGs e coloque em /public */
const icon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const techs = [
  { nome: "HTML5", src: icon("html5") },
  { nome: "CSS3", src: icon("css3") },
  { nome: "JavaScript", src: icon("javascript") },
  { nome: "React", src: icon("react") },
  { nome: "Tailwind", src: icon("tailwindcss") },
];

const skills = ["Orientação a componentes", "Foco em acessibilidade", "Clean Code", "Performance Web"];

/* Superfícies de vidro reutilizáveis */
const glass =
  "bg-white/[0.05] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]";
const glassHover =
  "transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(124,58,237,0.25),inset_0_1px_0_rgba(255,255,255,0.18)]";
const chip = "text-xs px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 backdrop-blur-md";
const field =
  "w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-md focus:outline-none focus:border-purple-400/70 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/10 transition-all";
const iconBox =
  "w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-purple-300";

const Titulo = ({ children }) => (
  <h2 className="font-bold text-3xl md:text-4xl tracking-tight">{children}</h2>
);

export default function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="relative isolate min-h-screen overflow-x-hidden bg-[#07060d] text-zinc-50 antialiased selection:bg-purple-500/40 selection:text-white"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        @keyframes drift { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(40px,-30px,0) scale(1.12); } }
        .orb { animation: drift 18s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .orb { animation: none; } html { scroll-behavior: auto; } }
      `}</style>

      {/* FUNDO: orbes de cor que dão profundidade ao vidro */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="orb absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-purple-600/40 blur-[120px]" />
        <div className="orb absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-fuchsia-600/25 blur-[130px]" style={{ animationDelay: "-6s" }} />
        <div className="orb absolute -bottom-40 left-1/4 w-[520px] h-[520px] rounded-full bg-indigo-600/30 blur-[120px]" style={{ animationDelay: "-12s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
      </div>

      {/* NAVBAR flutuante */}
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <nav className={`max-w-5xl mx-auto h-14 rounded-full px-5 md:px-6 flex items-center justify-between ${glass}`}>
          <a href="#home" className="font-bold text-lg tracking-tight">
            Moreira<span className="text-purple-400">Coder</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm text-zinc-300">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden p-1 text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Abrir ou fechar menu"
            aria-expanded={menu}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d={menu ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"} />
            </svg>
          </button>
        </nav>

        {menu && (
          <div className={`md:hidden max-w-5xl mx-auto mt-2 rounded-3xl p-3 flex flex-col text-sm text-zinc-200 ${glass}`}>
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenu(false)} className="px-4 py-3 rounded-2xl hover:bg-white/10">
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="px-4 md:px-8">
        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto pt-36 pb-20 md:pt-44 md:pb-28">
          <div className={`rounded-[2rem] p-8 md:p-14 grid md:grid-cols-12 gap-10 items-center ${glass}`}>
            <div className="md:col-span-7">
              <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] mb-4 bg-gradient-to-br from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                Davi Moreira
              </h1>
              <p className="text-lg md:text-xl text-purple-300 font-medium mb-6">Desenvolvedor Front-end</p>
              <p className="text-zinc-300/90 text-base md:text-lg leading-relaxed max-w-xl mb-9">
                Desenvolvo interfaces web modernas com HTML, CSS, JavaScript, React e Tailwind. Uso IA como aliada no
                fluxo de trabalho para entregar projetos com agilidade, sem abrir mão da qualidade.
              </p>
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-2 overflow-hidden px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_30px_rgba(168,85,247,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="absolute -inset-full top-0 block w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                <span className="relative">Vamos conversar</span>
                <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Constelação + slot da foto */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[340px] aspect-square rounded-[1.75rem] bg-white/[0.04] border border-white/10 backdrop-blur-xl p-6 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <svg viewBox="0 0 380 380" className="w-full h-full" aria-hidden>
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="nodeGlow">
                      <stop offset="0%" stopColor="#EDE9FE" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </radialGradient>
                  </defs>
                  <g stroke="url(#lineGrad)" strokeWidth="1.5" fill="none">
                    <path d="M90 120 L190 80 L285 135" />
                    <path d="M190 80 L178 190" />
                    <path d="M90 120 L100 265 L178 190 L260 300" />
                    <path d="M285 135 L260 300" />
                    <path d="M100 265 L60 320 M260 300 L300 330" />
                  </g>
                  {[[90,120,5],[190,80,5],[285,135,5],[100,265,4.5],[178,190,4.5],[260,300,4.5],[60,320,3.5],[300,330,3.5]].map(([cx, cy, r]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="url(#nodeGlow)" />
                  ))}
                </svg>

                <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-purple-400/60 bg-white/[0.07] backdrop-blur-xl flex flex-col items-center justify-center text-center p-2 shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.8" className="mb-1">
                    <rect x="3" y="6" width="18" height="14" rx="2" />
                    <circle cx="12" cy="13" r="3.2" />
                    <path d="M8 6l1.2-2h5.6L16 6" />
                  </svg>
                  <span className="text-[10px] text-zinc-400 leading-tight">[Sua foto aqui]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MIM */}
        <section id="sobre" className="max-w-6xl mx-auto py-16">
          <div className={`rounded-[2rem] p-8 md:p-12 grid md:grid-cols-12 gap-8 ${glass}`}>
            <div className="md:col-span-4">
              <Titulo>Sobre mim</Titulo>
            </div>
            <div className="md:col-span-8">
              <p className="text-zinc-300/90 text-base md:text-lg leading-relaxed mb-8">
                Sou desenvolvedor front-end em constante aprendizado. Trabalho com HTML, CSS, JavaScript, React e
                Tailwind, e uso ferramentas de IA para acelerar o desenvolvimento, atuando como orquestrador: defino o
                que precisa ser feito, reviso o resultado e ajusto até ficar certo.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span key={s} translate="no" className={chip}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="max-w-6xl mx-auto py-16">
          <div className="mb-10 px-2">
            <Titulo>Projetos</Titulo>
            <p className="text-zinc-400 text-sm mt-3">Alguns dos meus projetos foram construídos com HTML, CSS, JavaScript, React e Tailwind.</p>
          </div>

          <div className="space-y-6">
            {projetos.map((p, i) => (
              <article key={p.nome} className={`grid md:grid-cols-12 rounded-[2rem] overflow-hidden ${glass} ${glassHover}`}>
                <div className={`md:col-span-6 p-8 flex items-center justify-center bg-white/[0.03] ${i % 2 ? "md:order-2 md:border-l" : "md:border-r"} border-b md:border-b-0 border-white/10`}>
                  <svg viewBox="0 0 400 220" className="w-full h-auto max-h-48" aria-hidden>
                    <g opacity="0.7" stroke="#A78BFA" strokeWidth="1.5" fill="rgba(167,139,250,0.08)">{p.art}</g>
                  </svg>
                </div>
                <div className={`md:col-span-6 p-8 md:p-10 flex flex-col justify-center ${i % 2 ? "md:order-1" : ""}`}>
                  <h3 className="font-bold text-2xl mb-3">{p.nome}</h3>
                  <p className="text-zinc-300/80 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className={chip}>{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-xs font-semibold">
                    <a href="#projetos" className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-zinc-200 hover:bg-white/15 transition-colors">
                      GitHub
                    </a>
                    <a href="#projetos" className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 hover:bg-purple-500/30 transition-colors">
                      Demonstração
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section id="tecnologias" className="max-w-6xl mx-auto py-16">
          <div className="mb-10 px-2">
            <Titulo>Tecnologias</Titulo>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techs.map((t) => (
              <div key={t.nome} className={`group rounded-3xl p-6 flex flex-col items-center gap-3 ${glass} ${glassHover}`}>
                <img src={t.src} alt="" loading="lazy" className="w-11 h-11 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs text-zinc-300">{t.nome}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="max-w-6xl mx-auto py-16 pb-24">
          <div className={`rounded-[2rem] p-8 md:p-12 grid md:grid-cols-12 gap-12 ${glass}`}>
            <div className="md:col-span-5">
              <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">Vamos conversar</h2>
              <p className="text-zinc-300/80 text-sm leading-relaxed mb-8">
                Aberto a vagas e projetos como desenvolvedor front-end. Me chame por e-mail ou pelo Instagram.
              </p>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <span className={iconBox}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span>davimcoder@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className={iconBox}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Parnaíba, Piauí (ou Remoto)</span>
                </div>

                <a
                  href="https://instagram.com/moreiracoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className={`${iconBox} group-hover:bg-purple-500/20 group-hover:border-purple-400/40 transition-colors`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  <span>@Moreiracoder</span>
                </a>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="md:col-span-7 flex flex-col gap-4">
              {[
                ["nome", "Nome", "text", "Seu nome"],
                ["email", "E-mail", "email", "seu@email.com"],
              ].map(([id, label, type, ph]) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs text-zinc-400 mb-2">{label}</label>
                  <input id={id} type={type} placeholder={ph} className={field} />
                </div>
              ))}
              <div>
                <label htmlFor="mensagem" className="block text-xs text-zinc-400 mb-2">Mensagem</label>
                <textarea id="mensagem" rows={4} placeholder="Conte sobre o seu projeto" className={`${field} resize-none`} />
              </div>
              <button
                type="submit"
                className="self-start mt-2 px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_30px_rgba(168,85,247,0.4),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_0_45px_rgba(168,85,247,0.65),inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-4 pb-8">
        <div className={`max-w-6xl mx-auto rounded-full px-6 py-4 text-xs text-zinc-400 text-center md:text-left ${glass}`}>
          © 2026 MoreiraCoder.
        </div>
      </footer>
    </div>
  );
}
