

## Реализовано

- **File-Based Routing** — страницы `/`, `/catalog`, `/catalog/[id]`, `/about`
- **Layouts** — глобальный Navbar в `app/layout.tsx`, сайдбар категорий в `app/catalog/layout.tsx`
- **Server Components** — `/catalog` и `/catalog/[id]` делают fetch на сервере без `useEffect`
- **Client Components** — `FavoriteButton`, `CounterDemo`, `SearchBar` (паттерн "client islands")
- **Параллельные запросы** — `Promise.all` на странице фильма (фильм + похожие)
- **loading.tsx** — скелетон из 6 карточек с `animate-pulse`
- **API Routes** — REST-эндпоинт `GET/POST /api/movies` с фильтрацией по жанру и валидацией
- **Metadata** — статические `metadata` на `/`, `/catalog`; динамический `generateMetadata` на странице фильма; шаблон `%s | Каталог фильмов`
- **SearchBar** 
- **error.tsx + .env.local** 

## Структура

```
app/
├── layout.tsx              # корневой layout с Navbar
├── page.tsx                # главная
├── about/page.tsx
├── api/movies/route.ts     # API-эндпоинт
└── catalog/
    ├── layout.tsx          # сайдбар категорий
    ├── loading.tsx         # скелетон
    ├── error.tsx           # error boundary
    ├── page.tsx            # список фильмов (Server) + SearchBar (Client)
    └── [id]/page.tsx       # страница фильма

components/
├── Navbar.tsx
├── FavoriteButton.tsx     
├── CounterDemo.tsx         
└── SearchBar.tsx           
```

## Стек

Next.js 15 · React 19 · TypeScript · Tailwind CSS

не знаю откуда в проекте агентские файлы от курсора и клауда, они почему то автоматом сюда добавились при установке некста тк у меня стоят на пк(нейронки использовал только чтобы нарисовать схему структуры и причесать ридми)
