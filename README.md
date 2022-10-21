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
