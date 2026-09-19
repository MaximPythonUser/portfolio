"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TimelineItem } from "@/components/timeline-item";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  Code2,
  FolderGit2,
  Github,
  Layers,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Send,
  Sparkles,
  User,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  {
    title: "Сайт-портфолио",
    description:
      "Персональный сайт-портфолио с тёмным нео-скеuomorphic дизайном. Разработан на Next.js 16 с использованием Tailwind CSS. Включает 3D-графику, эффект матового стекла, кастомные анимации и адаптивную вёрстку под мобильные устройства.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    year: "2025",
    image: "/images/portfolio-preview.jpg",
    link: "https://portfolio-wine-six-68.vercel.app",
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header - moved outside content wrapper for proper backdrop-blur */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/[0.03] border-b border-white/[0.08] shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
        <div className="mx-auto flex h-14 md:h-16 max-w-5xl items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm md:text-base text-primary-foreground">
              М
            </span>
            Максим · Портфолио
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              Обо мне
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Навыки
            </a>
            <a
              href="#goals"
              className="transition-colors hover:text-foreground"
            >
              Цели
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
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-white/5 transition-colors"
              aria-label="Меню"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Button asChild size="sm" className="hidden sm:inline-flex btn-3d">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Написать
              </a>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
{isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-2xl bg-background/90 border-b border-white/10">
            <nav className="flex flex-col gap-1 p-4 text-sm">
              <a href="#about" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5">Обо мне</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5">Навыки</a>
              <a href="#goals" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5">Цели</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5">Проекты</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5">Контакты</a>
            </nav>
          </div>
        )}
      </header>

      <div className="flex min-h-screen flex-col pt-16">
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 md:px-6">
          {/* Hero */}
          <section className="relative w-full overflow-hidden flex items-center justify-center px-4 pt-28 pb-20 md:pt-32 md:pb-24">
            {/* Metallic ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full opacity-20 pointer-events-none" />
            {/* 3D Torus - Giant background portal */}
            <img
              src="/hero-torus.png"
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[900px] md:h-[900px] object-contain pointer-events-none z-0 opacity-30 md:opacity-40"
              style={{
                border: 'none',
                outline: 'none',
                filter: 'drop-shadow(0 0 60px rgba(167, 139, 250, 0.6)) drop-shadow(0 0 120px rgba(139, 92, 246, 0.4)) contrast(1.15) brightness(1.1)'
              }}
            />
            
            {/* Content wrapper */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4" style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%) !important',
                  border: '1px solid rgba(255,255,255,0.15) !important',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 10px rgba(0,0,0,0.5) !important',
                  borderRadius: '50px !important'
                }}>
                <Sparkles className="mr-1 h-3 w-3" />
                Открыт для заказов и стажировки
              </Badge>
              <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.5)' }}>
                Привет! Я Максим — делаю сайты и веб-приложения
              </h1>
              <p className="mb-8 text-sm text-muted-foreground sm:text-base md:text-lg"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}>
                Python-разработчик (1+ год): Telegram-боты, парсеры, бэкенд API.
                PostgreSQL, Docker, FastAPI, aiogram. От архитектуры до деплоя на VPS.
              </p>
              <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
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
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> Россия · удалённо
                </span>
                <span className="inline-flex items-center gap-1">
                  <Rocket className="h-4 w-4" /> Python · PostgreSQL · Docker
                </span>
              </div>
            </div>
          </section>

        <Reveal>
          <section id="about" className="scroll-mt-0 py-8 md:py-12">
          <div className="mb-6 flex items-center justify-center gap-2">
            <User className="h-5 w-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Обо мне</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Карточка 1: Коротко — на всю ширину */}
            <div className="glass-card flex flex-col rounded-2xl p-5 md:p-6 md:col-span-3">
              <h3 className="mb-2 text-2xl font-bold">Коротко</h3>
              <p className="mb-6 text-sm text-muted-foreground">Чем занимаюсь и чем могу быть полезен</p>
              <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground leading-relaxed md:grid-cols-2 md:gap-8">
                <p>
                  Веб-разработчик с опытом 1+ год. Специализируюсь на Telegram-ботах,
                  парсерах и бэкенде на Python. Пишу чистый код, настраиваю CI/CD,
                  работаю с PostgreSQL и Docker.
                </p>
                <p>
                  Основной стек: Python (aiogram, asyncio), PostgreSQL, Docker,
                  FastAPI. Опыт развёртывания на VPS, настройка nginx, systemd.
                </p>
                <p className="md:col-span-2">
                  Реализовывал проекты от архитектуры до деплоя: боты с
                  сложной логикой и ролями, парсеры маркетплейсов, админки.
                  Открыт к задачам на Python-бэкенд и Telegram-интеграции.
                </p>
              </div>
            </div>

            {/* Карточки сервисов — 3 штуки в ряд */}
            {services.map((s) => (
              <div key={s.title} className="glass-card flex flex-col rounded-2xl p-5 md:p-6">
                <div className="flex gap-3">
                  <span className="service-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        <hr className="glow-divider my-8" />

        {/* Skills */}
        <Reveal>
          <section id="skills" className="scroll-mt-20 py-8 md:py-12">
            <div className="mb-8 flex items-center justify-center gap-2">
            <Code2 className="h-5 w-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Навыки</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.map((s) => (
                  <Badge key={s} variant="secondary" className="badge-3d text-xs sm:text-sm">
                    {s}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-sm md:text-base text-muted-foreground">
                Основной стек: Python, aiogram, FastAPI, PostgreSQL, Docker, AsyncIO.
                Этот сайт на Next.js/TS — пет-проект для портфолио.
              </p>
            </CardContent>
          </Card>
        </section>
        </Reveal>

        <hr className="glow-divider my-8" />

        {/* Goals & Timeline */}
        <Reveal>
          <section id="goals" className="relative w-full py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            {/* Заголовок секции */}
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Цели и достижения
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Путь и планы
              </h2>
            </div>

            {/* Таймлайн */}
            <div className="relative">
              {/* Вертикальная центральная линия со свечением */}
              <div
                className="absolute left-4 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.5) 15%, rgba(139, 92, 246, 0.5) 85%, transparent)',
                }}
              />

              {/* Карточки таймлайна */}
              <div className="space-y-8 md:space-y-12">
                {/* Карточка 1 */}
                <TimelineItem
                  year="2024"
                  badge="Достижение"
                  title="Первые шаги в Python"
                  description="Начал изучать Python: синтаксис, ООП, работа с API. Быстро понял, что автоматизация и боты — это моё."
                  side="left"
                />

                {/* Карточка 2 */}
                <TimelineItem
                  year="2024"
                  badge="Достижение"
                  title="Первые Telegram-боты"
                  description="Освоил aiogram и базы данных. Собрал простых ботов: конвертеры, опросники, планировщики задач."
                  side="right"
                />

                {/* Карточка 3 */}
                <TimelineItem
                  year="2025"
                  badge="Достижение"
                  title="Боты для реальных задач"
                  description="Трекер тренировок с ролями и админ-панелью, бот записи в барбершоп со свободными окнами. Полный цикл: от схемы БД до деплоя."
                  side="left"
                />

                {/* Карточка 4 — Цель на будущее */}
                <TimelineItem
                  year="2026"
                  badge="Цель"
                  title="Senior Python Developer"
                  description="Углубить знания в архитектуре высоконагруженных систем и стать ведущим разработчиком в команде."
                  side="right"
                  isGoal={true}
                />
              </div>
            </div>
          </div>
        </section>
        </Reveal>

        <hr className="glow-divider my-8" />

        {/* Projects */}
        <Reveal>
          <section id="projects" className="scroll-mt-20 py-8 md:py-12">
            <div className="mb-8 flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-center md:gap-8">
              <div className="flex items-center justify-center gap-2">
                <FolderGit2 className="h-5 w-5" />
                <h2 className="text-2xl font-bold">Проекты</h2>
              </div>
              <span className="text-sm text-muted-foreground md:text-right">
                4 проекта · Telegram-боты, парсеры, бэкенд, Next.js
              </span>
            </div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((p, index) => (
              <Reveal key={p.title} delay={index * 100}>
                <article className="glass-card flex h-full flex-col overflow-hidden rounded-2xl">
                  <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                  
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">{p.year}</span>
                      <span className="text-muted-foreground">↗</span>
                    </div>
    
                    <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
    
                    <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="badge-3d px-3 py-1 text-xs">{tag}</span>
                      ))}
                    </div>
    
                    <Button className="btn-3d mt-auto w-full" asChild>
                      <a href={p.link || "#"} className="flex items-center justify-center gap-2">
                        <ArrowUpRight className="h-4 w-4" />
                        Смотреть
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        </Reveal>

<hr className="glow-divider my-8" />

        {/* Contact */}
        <Reveal>
          <section id="contact" className="scroll-mt-20 py-12 md:py-16">
            <div className="mb-8 flex items-center justify-center gap-2">
              <Send className="h-5 w-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Контакты</h2>
            </div>
            <Card className="glass-card">
              <CardContent className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg md:text-xl font-semibold">
                    Есть задача? Давайте обсудим
                  </p>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground">
                    Отвечаю в течение дня — почта, Telegram и GitHub ниже.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-3d w-full sm:w-auto">
                  <a href="mailto:maksim.syslov.work@mail.ru">
                    <Mail className="mr-2 h-4 w-4" />
                    maksim.syslov.work@mail.ru
                  </a>
                </Button>
                <Button asChild className="btn-3d w-full sm:w-auto">
                  <a
                    href="https://t.me/AmNeS1yaa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="btn-outline-tactile w-full sm:w-auto">
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
        </Reveal>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 md:px-6 text-sm text-muted-foreground sm:flex-row">
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
