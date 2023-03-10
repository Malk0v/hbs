# заказ еды

проект по курсу **JavaScript** (Frontend Core #22).

### Prerequisites

На компьютере должен быть установлен [Node.js](https://nodejs.org/en/).

### Setting up Dev

Один раз на проект установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm run dev
или
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:1234](http://localhost:1234).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying / Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

Также необходимо отредактировать скрипт "predeploy".

```json
"predeploy": "npm run build -- --public-url='/имя_репозитория/'"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

## Configuration

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик
  просто копирует используемые изображения чтобы не нагружать вашу систему
  оптимизацией десятков картинок, так как на слабых компьютерах это повесит
  систему.
 

 //=======
 
 - для игнора

  {
  "types": "unrelated.js",
  "targets": {
    "types": false
  }
}

больше информации тут 

https://github.com/RuslanaLogosha/Filmoteka/blob/main/package.json