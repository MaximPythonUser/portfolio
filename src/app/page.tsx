import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  Code2,
  FolderGit2,
  Github,
  Layers,
  Mail,
  MapPin,
  Rocket,
  Send,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const skills = [
  "Python",
  "aiogram",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "AsyncIO",
  "Git",
  "Linux",
  "nginx",
  "Redis",
  "SQLAlchemy",
  "Pydantic",
];

const projects = [
  {
    title: "Бот-трекер тренировок",
    description:
      "Telegram-бот: напоминания, запись на тренировки, самостоятельные и с тренером, админ-панель, разделение ролей тренер/пользователь.",
    tags: ["Python", "Telegram API", "PostgreSQL", "Docker"],
    year: "2025",
    image: "/images/project-3.jpeg",
  },
  {
    title: "Бот записи в барбершоп",
    description:
      "Telegram-бот для записи к мастерам: выбор специалиста, свободные временные слоты, уведомления, админка.",
    tags: ["Python", "Telegram API", "PostgreSQL"],
    year: "2025",
    image: "/images/project-1.jpeg",
  },
  {
    title: "Парсер цен Wildberries и Ozon",
    description:
      "Автоматический сбор и мониторинг цен товаров на Wildberries и Ozon. Планировщик, хранение истории, экспорт данных.",
    tags: ["Python", "AsyncIO", "PostgreSQL", "Docker"],
    year: "2024",
    image: "/images/project-2.jpeg",
  },
];

const services = [
  {
    icon: Code2,
    title: "Сайты под ключ",
    text: "Лендинги, визитки, корпоративные сайты. Быстро, адаптивно, с SEO-базой.",
  },
  {
    icon: Layers,
    title: "Веб-приложения",
    text: "Дашборды, кабинеты, CRUD-системы на React / Next.js + API.",
  },
  {
    icon: Wrench,
    title: "Доработка и поддержка",
    text: "Разберу чужой код из GigaStudio, исправлю баги, ускорю загрузку.",
  },
];

export default function IndexPage() {
  return (
    <>
      {/* Header - moved outside content wrapper for proper backdrop-blur */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/[0.03] border-b border-white/[0.08] shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
              М
            </span>
            Максим · Портфолио
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              Обо мне
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Навыки
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex btn-3d">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Написать
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen flex-col pt-16">
        <main className="mx-auto w-full max-w-5xl flex-1 px-4">
          {/* Hero */}
          <section className="relative py-16 text-center sm:py-24 overflow-visible">
          {/* Metallic ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full opacity-20 pointer-events-none" />
          {/* 3D Torus - Giant background portal */}
          <img
            src="/hero-torus.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] object-contain opacity-35 pointer-events-none z-0"
            style={{
              border: 'none',
              outline: 'none',
              filter: 'drop-shadow(0 0 60px rgba(167, 139, 250, 0.8)) contrast(1.2) brightness(1.15)'
            }}
          />
          <Badge variant="secondary" className="mb-4 relative z-10" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%) !important',
              border: '1px solid rgba(255,255,255,0.15) !important',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 10px rgba(0,0,0,0.5) !important',
              borderRadius: '50px !important'
            }}>
            <Sparkles className="mr-1 h-3 w-3" />
            Открыт для заказов и стажировки
          </Badge>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl hero-title relative z-10"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6)' }}>
            Привет! Я Максим — делаю сайты и веб-приложения
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300 relative z-10"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}>
            Python-разработчик (1+ год): Telegram-боты, парсеры, бэкенд API.
            PostgreSQL, Docker, FastAPI, aiogram. От архитектуры до деплоя на VPS.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Button asChild size="lg" className="btn-3d">
              <a href="#projects">
                <FolderGit2 className="mr-2 h-4 w-4" />
                Смотреть проекты
              </a>
            </Button>
            <Button asChild size="lg" className="btn-3d-secondary">
              <a href="#contact">
                Связаться
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground relative z-10">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Россия · удалённо
            </span>
            <span className="inline-flex items-center gap-1">
              <Rocket className="h-4 w-4" /> Python · PostgreSQL · Docker
            </span>
          </div>
        </section>

        <hr className="glow-divider my-8" />

        {/* About + services */}
        <section id="about" className="scroll-mt-20 py-14">
          <div className="mb-8 flex items-center gap-2">
            <User className="h-5 w-5" />
            <h2 className="text-2xl font-bold">Обо мне</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
<Card className="glass-card" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%) !important',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5) !important',
              border: '1px solid rgba(255, 255, 255, 0.1) !important'
            }}>
              <CardHeader>
                <CardTitle>Коротко</CardTitle>
                <CardDescription>
                  Чем занимаюсь и чем могу быть полезен
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Веб-разработчик с опытом 1+ год. Специализируюсь на Telegram-ботах,
                  парсерах и бэкенде на Python. Пишу чистый код, настраиваю CI/CD,
                  работаю с PostgreSQL и Docker.
                </p>
                <p>
                  Основной стек: Python (aiogram, asyncio), PostgreSQL, Docker,
                  FastAPI. Опыт развёртывания на VPS, настройка nginx, systemd.
                </p>
                <p>
                  Реализовывал проекты от архитектуры до деплоя: боты с
                  сложной логикой и ролями, парсеры маркетплейсов, админки.
                  Открыт к задачам на Python-бэкенд и Telegram-интеграции.
                </p>
              </CardContent>
            </Card>
            <div className="group/services grid gap-4">
              {services.map((s) => (
                <Card
                  key={s.title}
                  className="glass-card"
                >
                  <CardContent className="flex gap-3 pt-6">
                    <span className="service-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <hr className="glow-divider my-8" />

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-14">
          <div className="mb-8 flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            <h2 className="text-2xl font-bold">Навыки</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Badge key={s} variant="secondary" className="badge-3d text-sm">
                    {s}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Основной стек: Python, aiogram, FastAPI, PostgreSQL, Docker, AsyncIO.
                Этот сайт на Next.js/TS — пет-проект для портфолио.
              </p>
            </CardContent>
          </Card>
        </section>

        <hr className="glow-divider my-8" />

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-14">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-5 w-5" />
              <h2 className="text-2xl font-bold">Проекты</h2>
            </div>
            <span className="text-sm text-muted-foreground">
              3 проекта · Telegram-боты, парсеры, бэкенд
            </span>
          </div>
          <div className="group/projects grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card
                key={p.title}
                className="glass-card flex flex-col"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline">{p.year}</Badge>
                    <ArrowUpRight className="project-icon h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-3 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="badge-3d">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="btn-3d w-full sm:w-auto">
                    <a href="#" className="flex items-center justify-center gap-2">
                      <ArrowUpRight className="h-4 w-4" />
                      Смотреть
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="glow-divider my-8" />

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-14">
          <div className="mb-8 flex items-center gap-2">
            <Send className="h-5 w-5" />
            <h2 className="text-2xl font-bold">Контакты</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold">
                  Есть задача? Давайте обсудим
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Отвечаю в течение дня — почта, Telegram и GitHub ниже.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild className="btn-3d">
                  <a href="mailto:maksim.syslov.work@mail.ru">
                    <Mail className="mr-2 h-4 w-4" />
                    maksim.syslov.work@mail.ru
                  </a>
                </Button>
                <Button asChild className="btn-3d">
                  <a
                    href="https://t.me/AmNeS1yaa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="btn-outline-tactile">
                  <a
                    href="https://github.com/MaximPythonUser"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Максим · Сделано на Next.js + GigaStudio</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Портфолио · v1.0
          </span>
        </div>
      </footer>
    </div>
  </>
  );
}
