
# Custom Widgets

Коллекция компонентов веб-интерфейса.

## Widgets

| #    | Demo                               |
| ---- | ---------------------------------- |
| 01   | [Profile Card][profile]            |
| 02   | [Timeline][timeline]               |
| 03   | [Checkbox][checkbox]               |
| 04   | [File Upload][upload]              |
| 05   | [Modal][modal]                     |
| 06   | [Drag and Drop][dnd]               |
| 07   | [Password checker][pwd-checker]    |
| 08   | [Sidebar][sidebar]                 |
| 09   | [Sign Up Form][form]               |
| 10   | [Tabs][tabs]                       |
| 11   | [Dropdown][dropdown]               |

[profile]: https://earodina.github.io/custom-widgets-html-css-js/profile-card
[timeline]: https://earodina.github.io/custom-widgets-html-css-js/timeline
[checkbox]: https://earodina.github.io/custom-widgets-html-css-js/checkbox
[upload]: https://earodina.github.io/custom-widgets-html-css-js/file-upload
[modal]: https://earodina.github.io/custom-widgets-html-css-js/modal
[dnd]: https://earodina.github.io/custom-widgets-html-css-js/drag-and-drop
[pwd-checker]: https://earodina.github.io/custom-widgets-html-css-js/password-checker
[sidebar]: https://earodina.github.io/custom-widgets-html-css-js/sidebar
[form]: https://earodina.github.io/custom-widgets-html-css-js/sign-up-form
[tabs]: https://earodina.github.io/custom-widgets-html-css-js/tabs
[dropdown]: https://earodina.github.io/custom-widgets-html-css-js/dropdown

## Как запустить проект

**Для запуска проекта необходимо установить Node.js ^20.13.1**

Установить зависимости

```bash
  npm install
```

Запустить сервер

```bash
  npm run dev
```

## Команды для работы с проектом

Запуск dev-сервера

```bash
  npm run dev
```

Сборка для production

```bash
  npm run build
```
    
Просмотреть файлы build сборки

```bash
  npm run preview
```
## Функции

- Компиляция Pug файлов в HTML
- Компиляция Less файлов в CSS с последующей минификацией
- Автоматическое расставление вендорных префиксов
- Подключение js-скриптов и библиотек
- Минификация изображений с помощью Sharp и SVGO
- Настройка алиасов для корневой папки, папок с изображениями и скриптами


## Стэк

**Клиент:** pug, less, js

**Сервер:** Node(v20.13.1)

**Менеджер пакетов:** npm

## Структура проекта

``` plain
custom-widgets-html-css-js
├── developer
│   ├── css (папка для стилей внешних библиотек)
│   ├── fonts (шрифты в форматах woff, woff2)
│   ├── images
│   │   ├── background (фоновые картинки)
│   │   ├── content (контентные картинки)
│   │   └── svg (svg картинки)
│   ├── js
│   │   ├── library (внешние скрипты)
│   │   └ main.js
│   ├── less
│   │   ├── base (файлы констант, миксинов, шрифтов и тп)
│   │   ├── components (стили компонентов)
│   │   └ styles.less
│   └── pug
│       ├── components (шаблоны компонентов)
│       ├── layouts (шаблоны макетов)
│       ├── pages (шаблоны страниц)
│       └ index.pug
├── public
│   ├── css (общая папка стилей)
│   ├── fonts (шрифты в форматах woff, woff2)
│   ├── images (общая папка с картинками)
│   ├── js
│   │   ├── library (внешние скрипты)
│   │   └ main.js
│   └ html files
├── .editorconfig
├── .gitignore
├── package.json
├── postcss.config.js
└── vite.config.js
```
