import { useState } from "react";
import Icon from "@/components/ui/icon";

const builds = [
  {
    id: "budget",
    tier: "Бюджетный",
    price: "от 35 000 ₽",
    tagLabel: "Старт",
    accent: "var(--clr-budget)",
    accentBg: "rgba(34,197,94,0.08)",
    icon: "Monitor",
    desc: "Оптимальный вариант для офисных задач, учёбы и несложных игр в 1080p.",
    components: [
      { name: "Процессор", value: "AMD Ryzen 5 5600 (6 ядер / 12 потоков)" },
      { name: "Видеокарта", value: "Radeon RX 6600 8 ГБ" },
      { name: "ОЗУ", value: "16 ГБ DDR4 3200 МГц" },
      { name: "Накопитель", value: "SSD 512 ГБ NVMe" },
      { name: "Материнская плата", value: "B450M (micro-ATX)" },
      { name: "БП", value: "550W 80+ Bronze" },
      { name: "Корпус", value: "MicroATX с 1 вентилятором" },
    ],
    fps: [
      { game: "Minecraft (высокие)", fps: 180, max: 300 },
      { game: "CS2 (низкие-средние)", fps: 140, max: 300 },
      { game: "GTA V (высокие)", fps: 85, max: 120 },
      { game: "Fortnite (средние)", fps: 90, max: 200 },
      { game: "Cyberpunk 2077 (1080p low)", fps: 50, max: 120 },
    ],
    reviews: [
      { author: "Алексей", stars: 5, text: "Взял для сына — полёт нормальный. CS2 тянет уверенно, видеокарта не греется выше 75°. За эти деньги очень достойно." },
      { author: "Марина", stars: 4, text: "Собирали через местный магазин по этому списку. Всё работает. GTA немного подлагивает на ультра, но средние настройки — очень комфортно." },
      { author: "Дмитрий", stars: 5, text: "Офисные задачи, немного фотошопа, редкие игры. Всё летает. Доволен покупкой." },
    ],
    links: [
      { label: "AMD Ryzen 5 5600 — DNS", url: "https://www.dns-shop.ru/search/?q=AMD+Ryzen+5+5600" },
      { label: "AMD Ryzen 5 5600 — Citilink", url: "https://www.citilink.ru/search/?text=AMD+Ryzen+5+5600" },
      { label: "Radeon RX 6600 — DNS", url: "https://www.dns-shop.ru/search/?q=Radeon+RX+6600" },
      { label: "Radeon RX 6600 — Citilink", url: "https://www.citilink.ru/search/?text=Radeon+RX+6600" },
      { label: "16 ГБ DDR4 3200 — DNS", url: "https://www.dns-shop.ru/search/?q=DDR4+3200+16gb" },
      { label: "SSD 512 ГБ NVMe — DNS", url: "https://www.dns-shop.ru/search/?q=SSD+512gb+NVMe" },
      { label: "B450M материнская плата — DNS", url: "https://www.dns-shop.ru/search/?q=B450M+материнская+плата" },
    ],
  },
  {
    id: "mid",
    tier: "Средний",
    price: "от 75 000 ₽",
    tagLabel: "Оптимум",
    accent: "var(--clr-mid)",
    accentBg: "rgba(245,158,11,0.08)",
    icon: "Cpu",
    desc: "Мощная рабочая лошадка для игр в 1440p, монтажа видео и стриминга.",
    components: [
      { name: "Процессор", value: "Intel Core i5-13600K (14 ядер / 20 потоков)" },
      { name: "Видеокарта", value: "RTX 3070 8 ГБ" },
      { name: "ОЗУ", value: "32 ГБ DDR5 5200 МГц" },
      { name: "Накопитель", value: "SSD 1 ТБ NVMe Gen4" },
      { name: "Материнская плата", value: "Z790 (ATX)" },
      { name: "БП", value: "750W 80+ Gold" },
      { name: "Охлаждение", value: "Кастомная СЖО 240 мм" },
    ],
    fps: [
      { game: "CS2 (1440p высокие)", fps: 180, max: 300 },
      { game: "GTA V (1440p ultra)", fps: 75, max: 120 },
      { game: "Cyberpunk 2077 (1440p high)", fps: 55, max: 120 },
      { game: "Fortnite (1440p эпик)", fps: 110, max: 200 },
      { game: "Red Dead Redemption 2 (1440p)", fps: 65, max: 120 },
    ],
    reviews: [
      { author: "Николай", stars: 5, text: "RTX 3070 отлично тянет всё в 1440p. Cyberpunk на высоких настройках идёт стабильно, без просадок. За свои деньги — отличный выбор." },
      { author: "Светлана", stars: 5, text: "Взяла для монтажа и стриминга. RTX 3070 справляется на ура — кодирование NVENC не нагружает процессор, стрим идёт чисто." },
      { author: "Игорь", stars: 4, text: "Хотел 4070, но переплачивать не стал — 3070 закрывает все мои игры в 1440p с запасом. Разница в цене существенная, а в fps — не критичная." },
    ],
    links: [
      { label: "Intel Core i5-13600K — DNS", url: "https://www.dns-shop.ru/search/?q=Intel+Core+i5-13600K" },
      { label: "Intel Core i5-13600K — Citilink", url: "https://www.citilink.ru/search/?text=Intel+Core+i5-13600K" },
      { label: "RTX 3070 8GB — DNS", url: "https://www.dns-shop.ru/search/?q=RTX+3070+8gb" },
      { label: "RTX 3070 8GB — Citilink", url: "https://www.citilink.ru/search/?text=RTX+3070+8gb" },
      { label: "32 ГБ DDR5 5200 — DNS", url: "https://www.dns-shop.ru/search/?q=DDR5+5200+32gb" },
      { label: "SSD 1 ТБ NVMe Gen4 — DNS", url: "https://www.dns-shop.ru/search/?q=SSD+1tb+NVMe+Gen4" },
      { label: "Z790 материнская плата — DNS", url: "https://www.dns-shop.ru/search/?q=Z790+материнская+плата" },
    ],
  },
  {
    id: "high",
    tier: "Высокий",
    price: "от 180 000 ₽",
    tagLabel: "Флагман",
    accent: "var(--clr-high)",
    accentBg: "rgba(239,68,68,0.08)",
    icon: "Zap",
    desc: "Максимальная производительность для 4K-игр, 3D-рендеринга и профессиональных задач.",
    components: [
      { name: "Процессор", value: "AMD Ryzen 9 7950X (16 ядер / 32 потока)" },
      { name: "Видеокарта", value: "RTX 4090 24 ГБ" },
      { name: "ОЗУ", value: "64 ГБ DDR5 6000 МГц" },
      { name: "Накопитель", value: "2× SSD 2 ТБ NVMe Gen5" },
      { name: "Материнская плата", value: "X670E (ATX, Wi-Fi 6E)" },
      { name: "БП", value: "1000W 80+ Platinum" },
      { name: "Охлаждение", value: "Custom СЖО 360 мм AIO" },
    ],
    fps: [
      { game: "CS2 (4K высокие)", fps: 280, max: 300 },
      { game: "Cyberpunk 2077 (4K ultra + RT)", fps: 75, max: 120 },
      { game: "Red Dead Redemption 2 (4K)", fps: 100, max: 120 },
      { game: "Microsoft Flight Sim 2024", fps: 80, max: 120 },
      { game: "Blender GPU Render", fps: 0, label: "~4 мин / кадр" },
    ],
    reviews: [
      { author: "Артём", stars: 5, text: "RTX 4090 — это другой уровень. 4K/120fps в Cyberpunk с DLSS Quality реально работает. Не представляю, как раньше обходился без этого." },
      { author: "Татьяна", stars: 5, text: "Архитектурная визуализация. Ryzen 9 7950X делает рендер 3ds Max в 5 раз быстрее MacPro. Покупкой очень довольна." },
      { author: "Владимир", stars: 5, text: "Лучшее железо, которое я собирал за 15 лет. Всё работает стабильно, температуры отличные. Машина не знает слова 'лаги'." },
    ],
    links: [
      { label: "AMD Ryzen 9 7950X — DNS", url: "https://www.dns-shop.ru/search/?q=AMD+Ryzen+9+7950X" },
      { label: "AMD Ryzen 9 7950X — Citilink", url: "https://www.citilink.ru/search/?text=AMD+Ryzen+9+7950X" },
      { label: "RTX 4090 24GB — DNS", url: "https://www.dns-shop.ru/search/?q=RTX+4090+24gb" },
      { label: "RTX 4090 24GB — Citilink", url: "https://www.citilink.ru/search/?text=RTX+4090+24gb" },
      { label: "64 ГБ DDR5 6000 — DNS", url: "https://www.dns-shop.ru/search/?q=DDR5+6000+64gb" },
      { label: "SSD 2 ТБ NVMe Gen5 — DNS", url: "https://www.dns-shop.ru/search/?q=SSD+2tb+NVMe+Gen5" },
      { label: "X670E материнская плата — DNS", url: "https://www.dns-shop.ru/search/?q=X670E+материнская+плата" },
    ],
  },
];

const faqItems = [
  {
    q: "Стоит ли брать готовый ПК или собирать самому?",
    a: "Сборка своими руками экономит 15–25% стоимости и позволяет выбрать каждый компонент под задачи. Готовый системный блок удобен, если нет времени разбираться: большинство магазинов дают гарантию на всю систему. Для бюджетного сегмента — собирайте сами, для флагмана иногда выгоднее купить готовый с уже пройденным стресс-тестом.",
  },
  {
    q: "Нужна ли дискретная видеокарта для офисного ПК?",
    a: "Для работы с документами, браузером и видеозвонками — нет. Встроенная графика Ryzen (Vega/Radeon) или Intel (UHD) справится. Дискретная карта нужна, если хочется играть в любые игры или работать в Premiere/DaVinci.",
  },
  {
    q: "DDR4 vs DDR5 — есть ли смысл переплачивать?",
    a: "Для игр разница незначительна — 2–5% FPS. В профессиональных задачах (рендер, компиляция) DDR5 даёт 10–20% прирост. AMD AM5 работает только с DDR5, Intel 12–13 поколения — с обоими. Берёте сборку «на вырост» — DDR5 предпочтительнее.",
  },
  {
    q: "Насколько актуальны эти сборки в 2025 году?",
    a: "Сборки обновляются ежеквартально с учётом доступности компонентов и соотношения цена/производительность. Конфигурации протестированы и актуальны на апрель 2025 года. Цены проверяйте непосредственно в магазинах — они меняются.",
  },
  {
    q: "Что важнее — процессор или видеокарта?",
    a: "Для игр на первом месте видеокарта — она отвечает за 60–75% производительности. Процессор критичен для стриминга, монтажа, игр с открытым миром. Баланс важен: пара RTX 4090 + слабый процессор создаст «бутылочное горлышко» и потеряет до 30% потенциала.",
  },
  {
    q: "Нужен ли SSD, или HDD достаточно?",
    a: "В 2025 году SSD — обязательный минимум. Загрузка Windows: ~10 сек с SSD против 45–60 сек с HDD. Загрузка игр в 3–8 раз быстрее. HDD имеет смысл только как второй диск для хранения больших архивов.",
  },
];

const compareRows = [
  { label: "Процессор", budget: "Ryzen 5 5600", mid: "i5-13600K", high: "Ryzen 9 7950X" },
  { label: "Видеокарта", budget: "RX 6600", mid: "RTX 4070", high: "RTX 4090" },
  { label: "ОЗУ", budget: "16 ГБ DDR4", mid: "32 ГБ DDR5", high: "64 ГБ DDR5" },
  { label: "Накопитель", budget: "512 ГБ NVMe", mid: "1 ТБ Gen4", high: "2×2 ТБ Gen5" },
  { label: "FPS CS2", budget: "140 fps / 1080p", mid: "250 fps / 1440p", high: "280 fps / 4K" },
  { label: "FPS Cyberpunk 2077", budget: "50 fps Low", mid: "80 fps High", high: "75 fps 4K+RT" },
  { label: "Цена", budget: "35 000 ₽", mid: "75 000 ₽", high: "180 000 ₽" },
  { label: "Для кого", budget: "Учёба / Офис", mid: "Игры / Монтаж", high: "4K / Рендер" },
];

function FpsBar({ fps, max, label }: { fps: number; max: number; label?: string }) {
  if (label) {
    return (
      <div className="space-y-1">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-mono-custom" style={{ color: "var(--clr-blue-light)" }}>GPU</span>
          <span className="text-xs font-mono-custom" style={{ color: "var(--clr-muted)" }}>{label}</span>
        </div>
        <div className="fps-bar">
          <div className="fps-bar-fill" style={{ width: "80%", background: "var(--clr-blue)" }} />
        </div>
      </div>
    );
  }
  const pct = Math.min((fps / max) * 100, 100);
  const color = fps >= 120 ? "var(--clr-budget)" : fps >= 60 ? "var(--clr-mid)" : "var(--clr-high)";
  return (
    <div className="space-y-1">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-mono-custom" style={{ color }}>{fps} FPS</span>
      </div>
      <div className="fps-bar">
        <div className="fps-bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return <span className="star-rating">{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={18} className="shrink-0 ml-4" style={{ color: "var(--clr-blue-light)" }} />
      </button>
      <div className={`accordion-content${open ? " open" : ""}`}>{a}</div>
    </div>
  );
}

export default function Index() {
  return (
    <div style={{ background: "var(--clr-bg)", minHeight: "100vh" }}>

      {/* NAV */}
      <header
        className="sticky top-0 z-50"
        style={{ borderBottom: "1px solid var(--clr-border)", background: "rgba(9,12,19,0.94)", backdropFilter: "blur(14px)" }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cpu" size={20} style={{ color: "var(--clr-blue)" }} />
            <span className="font-bold text-base tracking-tight" style={{ color: "var(--clr-text)" }}>
              PC<span style={{ color: "var(--clr-blue)" }}>Builds</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#builds" className="nav-link">Сборки</a>
            <a href="#compare" className="nav-link">Сравнение</a>
            <a href="#faq" className="nav-link">Вопросы</a>
          </nav>
          <a href="#builds" className="btn-primary text-sm py-2 px-4">
            Выбрать сборку
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-6 pt-24 pb-20 animate-fade-in">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono-custom text-xs" style={{ color: "var(--clr-blue)", letterSpacing: "0.1em" }}>
              ОБНОВЛЕНО: АПРЕЛЬ 2025
            </span>
          </div>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "var(--clr-text)", letterSpacing: "-0.02em" }}>
            Актуальные сборки<br />
            <span style={{ color: "var(--clr-blue)" }}>персональных компьютеров</span>
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--clr-muted)", lineHeight: "1.7", maxWidth: "560px" }}>
            Три проверенные конфигурации: бюджетная, оптимальная и флагманская.
            Реальные тесты FPS, полный список комплектующих и отзывы владельцев.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#builds" className="btn-primary">
              <Icon name="Monitor" size={16} />
              Смотреть сборки
            </a>
            <a href="#compare" className="btn-outline">
              <Icon name="BarChart2" size={16} />
              Сравнить
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16 max-w-xs">
          {[
            { val: "3", label: "Конфигурации" },
            { val: "15+", label: "Тестов FPS" },
            { val: "9", label: "Отзывов" },
          ].map((s) => (
            <div key={s.label} className="card-surface rounded-lg p-4">
              <div className="text-2xl font-black mb-1" style={{ color: "var(--clr-blue)" }}>{s.val}</div>
              <div className="text-xs" style={{ color: "var(--clr-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BUILDS */}
      <section id="builds" className="section-divider py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono-custom text-xs mb-2" style={{ color: "var(--clr-blue)", letterSpacing: "0.1em" }}>СБОРКИ 2025</p>
            <h2 className="text-3xl font-black" style={{ color: "var(--clr-text)", letterSpacing: "-0.01em" }}>
              Выберите свою конфигурацию
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {builds.map((b) => (
              <div
                key={b.id}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px]"
                style={{ background: "var(--clr-surface)", border: "1px solid var(--clr-border)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${b.accent}80`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${b.accent}18`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.border = "1px solid var(--clr-border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Header */}
                <div className="p-6 pb-4" style={{ background: b.accentBg, borderBottom: "1px solid var(--clr-border)" }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${b.accent}22`.replace("var(--clr-budget)", "rgba(34,197,94,0.13)").replace("var(--clr-mid)", "rgba(245,158,11,0.13)").replace("var(--clr-high)", "rgba(239,68,68,0.13)") }}>
                      <Icon name={b.icon} size={20} style={{ color: b.accent }} />
                    </div>
                    <span className="tag" style={{
                      color: b.accent,
                      borderColor: b.accent,
                      background: b.accentBg,
                      opacity: 0.9,
                    }}>
                      {b.tagLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--clr-text)" }}>{b.tier}</h3>
                  <p className="text-2xl font-black" style={{ color: b.accent }}>{b.price}</p>
                  <p className="text-sm mt-2" style={{ color: "var(--clr-muted)", lineHeight: "1.5" }}>{b.desc}</p>
                </div>

                {/* Components */}
                <div className="p-6 pb-4">
                  <p className="font-mono-custom text-xs mb-3" style={{ color: "var(--clr-muted)", letterSpacing: "0.08em" }}>КОМПЛЕКТУЮЩИЕ</p>
                  <div className="space-y-2">
                    {b.components.map((c) => (
                      <div key={c.name} className="flex items-start justify-between gap-2">
                        <span className="text-xs shrink-0 mt-0.5" style={{ color: "var(--clr-muted)", minWidth: "96px" }}>{c.name}</span>
                        <span className="text-xs text-right font-medium" style={{ color: "var(--clr-text)" }}>{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FPS */}
                <div className="px-6 pb-4" style={{ borderTop: "1px solid var(--clr-border)", paddingTop: "1rem" }}>
                  <p className="font-mono-custom text-xs mb-3" style={{ color: "var(--clr-muted)", letterSpacing: "0.08em" }}>ПРОИЗВОДИТЕЛЬНОСТЬ (FPS)</p>
                  <div className="space-y-3">
                    {b.fps.map((f) => (
                      <div key={f.game}>
                        <div className="text-xs mb-1" style={{ color: "var(--clr-muted)" }}>{f.game}</div>
                        <FpsBar fps={f.fps} max={f.max} label={f.label} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="px-6 pb-4" style={{ borderTop: "1px solid var(--clr-border)", paddingTop: "1rem" }}>
                  <p className="font-mono-custom text-xs mb-3" style={{ color: "var(--clr-muted)", letterSpacing: "0.08em" }}>ОТЗЫВЫ</p>
                  <div className="space-y-3">
                    {b.reviews.map((r) => (
                      <div key={r.author} className="rounded-lg p-3" style={{ background: "var(--clr-surface2)", border: "1px solid var(--clr-border)" }}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold" style={{ color: "var(--clr-text)" }}>{r.author}</span>
                          <Stars n={r.stars} />
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--clr-muted)" }}>{r.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="px-6 pb-6" style={{ borderTop: "1px solid var(--clr-border)", paddingTop: "1rem" }}>
                  <p className="font-mono-custom text-xs mb-3" style={{ color: "var(--clr-muted)", letterSpacing: "0.08em" }}>КУПИТЬ / ПОСМОТРЕТЬ</p>
                  <div className="flex flex-col gap-2">
                    {b.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-all rounded-md px-3 py-2"
                        style={{ color: b.accent, background: b.accentBg, border: `1px solid ${b.accent}40` }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.15)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.filter = "none";
                        }}
                      >
                        <Icon name="ExternalLink" size={13} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="section-divider py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <p className="font-mono-custom text-xs mb-2" style={{ color: "var(--clr-blue)", letterSpacing: "0.1em" }}>СРАВНЕНИЕ</p>
            <h2 className="text-3xl font-black" style={{ color: "var(--clr-text)", letterSpacing: "-0.01em" }}>
              Характеристики рядом
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--clr-border)" }}>
            <div className="overflow-x-auto">
              <table className="compare-table w-full" style={{ background: "var(--clr-surface)" }}>
                <thead>
                  <tr>
                    <th className="text-left">Параметр</th>
                    <th>
                      <span style={{ color: "var(--clr-budget)" }}>Бюджетный</span>
                      <div className="text-xs font-normal mt-0.5 normal-case tracking-normal" style={{ color: "var(--clr-muted)" }}>35 000 ₽</div>
                    </th>
                    <th>
                      <span style={{ color: "var(--clr-mid)" }}>Средний</span>
                      <div className="text-xs font-normal mt-0.5 normal-case tracking-normal" style={{ color: "var(--clr-muted)" }}>75 000 ₽</div>
                    </th>
                    <th>
                      <span style={{ color: "var(--clr-high)" }}>Высокий</span>
                      <div className="text-xs font-normal mt-0.5 normal-case tracking-normal" style={{ color: "var(--clr-muted)" }}>180 000 ₽</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}>
                      <td>{row.label}</td>
                      <td style={{ color: "var(--clr-budget)" }}>{row.budget}</td>
                      <td style={{ color: "var(--clr-mid)" }}>{row.mid}</td>
                      <td style={{ color: "var(--clr-high)" }}>{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-divider py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-10">
            <p className="font-mono-custom text-xs mb-2" style={{ color: "var(--clr-blue)", letterSpacing: "0.1em" }}>FAQ</p>
            <h2 className="text-3xl font-black" style={{ color: "var(--clr-text)", letterSpacing: "-0.01em" }}>
              Вопросы и ответы
            </h2>
          </div>
          <div>
            {faqItems.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-divider py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Cpu" size={16} style={{ color: "var(--clr-blue)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--clr-text)" }}>
              PC<span style={{ color: "var(--clr-blue)" }}>Builds</span>
            </span>
          </div>
          <p className="text-xs text-center" style={{ color: "var(--clr-muted)" }}>
            Сборки обновлены: апрель 2025 · Цены актуальны на момент публикации · Проверяйте наличие в магазинах
          </p>
          <div className="flex gap-4">
            <a href="https://www.dns-shop.ru" target="_blank" rel="noopener noreferrer" className="text-xs nav-link">DNS</a>
            <a href="https://www.citilink.ru" target="_blank" rel="noopener noreferrer" className="text-xs nav-link">Citilink</a>
            <a href="https://www.regard.ru" target="_blank" rel="noopener noreferrer" className="text-xs nav-link">Regard</a>
            <a href="https://www.mvideo.ru" target="_blank" rel="noopener noreferrer" className="text-xs nav-link">М.Видео</a>
          </div>
        </div>
      </footer>

    </div>
  );
}