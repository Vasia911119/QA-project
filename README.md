## Localization

Плагин
[gatsby-plugin-react-i18next](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next)
с React@17.0.2 работает в версии 1.2.3

Инструкция:

1. Добавить настройки в файл `gatsby-config.js` (из
   [документации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))

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

3. Добавить запрос `graphql` на каждую страницу (из
   [документации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))

4. Для смены языка используется компонент `SwitchLanguages` (из
   [документации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))

5. В любом месте проекта есть доступ к языку, выбранному пользователем. Если
   язык данных, которые приходят с админ-панели Netlify CMS, совпадает с языком,
   выбранным пользователем на странице, рендерятся только эти данные

6. По умолчанию будет выбран язык браузера, если он есть в массиве языков
   проекта (так работает
   [плагин](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next))
   Для принудительного изменения языка по умолчанию (с русского на украинский)
   можно использовать костыль:

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

Есть 3 варианта темы:

- от системы пользователя (по умолчанию);
- светлая тема;
- темная тема.

Поэтому необходима дополнительная проверка на вариант темы при рендере
компонента `Toggler`:

```
{theme === 'dark' && (
  <>
    <HiOutlineMoon /> {!collapsed ? 'Dark' : ''}
  </>
)}

{theme === 'light' && (
  <>
    <HiOutlineSun /> {!collapsed ? 'Light' : ''}
  </>
)}
```

Помимо этого, в файл `tailwind.config.js` добавить:

```
module.exports = {
  darkMode: 'class',
  // ...
}
```

Теперь при переключении темы к `html` будет добавляться класс `dark`.

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

## Breadcrumb

Для переходу на головну сторінку використовується `Link`
([документація](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/)).

## Form

Форма створена на основі плагіна `react-hook-form`
([документація](https://react-hook-form.com/)).

Для валідації форми використовується `yup`
([документація](https://www.npmjs.com/package/yup)).

Для нотифікації при відправці форми використовується `react-notifications`
([документація](https://www.npmjs.com/package/react-notifications)).

Форма відправляється в telegram. Для того, щоб форма відправилась необхідні
змінні оточення - `environment variables`, оскільки сайт розміщений на хостингу
Netlify -
([документація](https://docs.netlify.com/environment-variables/overview/#site-environment-variables)),
то відповідно там і треба додати ці змінні.

Додати необхідно змінну `GATSBY_TELEGRAM_BOT_TOKEN` з токеном боту з telegram та
змінну `GATSBY_TELEGRAM_CHAT_ID` з id чату telegram куди будуть приходити дані з
форми.

Як створити бот в telegram, додати його до чату, як отримати з створеного боту
токен та отримати id чату, та як отримати повідомлення з форми в чат telegram
можна переглянути тут -
([відео](https://www.youtube.com/watch?v=RviYQrNdDok&ab_channel=AVISTV))

## ButtonsNavigate

Навігація кнопками здійснюється за допомогою `navigate`
([документація](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#how-to-use-the-navigate-helper-function))

## Стилізація динамічного контенту

Стилізувати динамічний контент можна двома способами:

1. Через глобальні стилі.
2. Через `@tailwindcss/typography`
   ([документація](https://tailwindcss.com/docs/typography-plugin))
