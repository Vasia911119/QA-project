## Localization

Плагин [gatsby-plugin-react-i18next](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next) с React@17.0.2 работает в версии 1.2.3

Инструкция:

1. Добавить настройки в файл `gatsby-config.js` (из [документации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))

2. Создать файлы-источники данных для переключения языков

```
|-- locales
    |-- en
        |-- translation.json
    |-- ru
        |-- translation.json
    |-- uk
        |-- translation.json
```

Для получения доступа к этим данным используется хук `useTranslation`.

3. Добавить запрос `graphql` на каждую страницу (из [документации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))

4. Для смены языка используется компонент `SwitchLanguages` (из [документации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))

5. В любом месте проекта есть доступ к языку, выбранному пользователем. Если язык данных, которые приходят с админ-панели Netlify CMS, совпадает с языком, выбранным пользователем на странице, рендерятся только эти данные

6. По умолчанию будет выбран язык браузера, если он есть в массиве языков проекта (так работает [плагин](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))
   Для принудительного изменения языка по умолчанию (с русского на украинский) можно использовать костыль:

```
React.useEffect(() => {
    const initialLang = window.localStorage.getItem('gatsby-i18next-language')
    const visit = window.localStorage.getItem('visit')

    if (initialLang === 'ru' && !visit) {
      window.localStorage.setItem('gatsby-i18next-language', 'uk')
      window.localStorage.setItem('visit', 'true')
      navigate('/uk')
    }
  }, [])
```

## Dark Mode

[Инструкция по созданию темной темы](https://javascript.plainenglish.io/how-to-add-dark-mode-in-a-gatsby-website-23df7289b220)

Теперь при переключении темы к `html` будет добавляться класс `dark`

Помимо этого, в файл `tailwind.config.js` добавить:

```
module.exports = {
  darkMode: 'class',
  // ...
}
```

Для написания стилей темной темы используется синтаксис `dark:...`

```
<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>

<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```
