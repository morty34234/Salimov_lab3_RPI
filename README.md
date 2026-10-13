# МастерЗнаний — учебная платформа для подбора лекторов

Веб-приложение на React для подбора и записи к лекторам. Пользователь может просматривать карточки лекторов, добавлять их в избранное и оставлять заявку на занятие.

## Стек и версии

| Технология | Версия |
|---|---|
| Node.js | v24.21.0 |
| npm | v11.19.0 |
| React | ^19.2.18 |
| React DOM | ^19.2.18 |
| React Router DOM | ^7.18.4 |
| Vite | ^8.3.0 |
| ESLint | ^10.10.0 |
| CSS | чистый, без препроцессоров |

## Установка и запуск

### 1. Клонировать репозиторий

```bash
git clone https://github.com/morty34234/Salimov_lab3_RPI.git
cd Salimov_lab3_RPI
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Запустить проект в режиме разработки

```bash
npm run dev
```

После запуска проект откроется по адресу:
```
http://localhost:5173
```

### 4. Собрать проект

```bash
npm run build
```

Готовые файлы появятся в папке `dist/`.

### 5. Предпросмотр сборки

```bash
npm run preview
```

## Структура проекта

```
site12/
├── public/                          # публичные файлы
├── src/
│   ├── assets/ 
│   ├── components/                  # переиспользуемые компоненты
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx           # верхнее меню
│   │   ├── BookingModal.jsx         # модальное окно «Записаться»
│   │   └── LoginModal.jsx           # модальное окно «Войти»
│   ├── context/                     # глобальные состояния (React Context)
│   │   └── FavoritesContext.jsx     # избранные лекторы
│   ├── data/
│   │   └── lectors.js               # данные о лекторах
│   ├── pages/                       # страницы приложения
│   │   ├── Home.jsx                 # главная
│   │   ├── About.jsx                # о нас
│   │   ├── Partners.jsx             # партнёры
│   │   ├── Lectors.jsx              # список лекторов
│   │   ├── Lectorsdetail.jsx        # подробная карточка лектора
│   │   └── Contacts.jsx             # контакты
│   ├── styles/
│   │   ├── styles.css               # глобальные стили
│   │   ├── BookingModal.css
│   │   └── LoginModal.css
│   ├── App.jsx                      # маршрутизация
│   ├── App.css
│   ├── index.css
│   └── main.jsx                     # точка входа
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Где лежат данные

Все данные о лекторах хранятся в файле:

```
src/data/lectors.js
```
Все изображения хранятся в облаке YandexCloud.
## Роутинг

Все маршруты описаны в файле `src/App.jsx`:

| Путь | Компонент | Что показывает |
|---|---|---|
| `/` | `Home` | Главная страница |
| `/about` | `About` | О нашей платформе |
| `/partners` | `Partners` | Партнёры |
| `/lectors` | `Lectors` | Список всех лекторов |
| `/lectors/:id` | `Lectorsdetail` | Подробная карточка лектора |
| `/contacts` | `Contacts` | Контакты |

`<BrowserRouter>` подключён в `src/main.jsx`.
Переходы между страницами — через `<NavLink>` в компоненте
`src/components/Navbar/Navbar.jsx`.

## Стили

Все стили — обычный CSS, без сторонних библиотек.
Файлы со стилями:

```
src/styles/styles.css
src/styles/BookingModal.css
src/styles/LoginModal.css
```

styles.css подключён в `App.jsx` и применяется ко всем страницам.

## Хранение данных пользователя

Данные пользователя хранятся в `localStorage` браузера:

| Ключ | Что хранит |
|---|---|
| `favorites` | ID лекторов, добавленных в избранное |
| `bookings` | Заявки на занятия с лекторами |