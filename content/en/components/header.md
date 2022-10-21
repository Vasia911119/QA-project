---
templateKey: component
title: Header
date: 2022-10-14T16:50:17.142Z
slug: header
description: header
featuredimage: /img/soldier-60707_960_720.png
language: en
---

### 1. Main site link

In the right corner is a link to the main site of **GoIT** in the form of a logo.

### 2. Navigation menu

Inside the navigation menu to move between resolved issues:

- The `"left"` arrow opens the previous question.
- The central button, which shows the number of the current question and through the slash '"/"` the total number of questions. Clicking on this button opens a list of resolved questions. Clicking on the button with the question number in the list opens the page with the corresponding question. a list of resolved issues opens.
- The `"right"` opens the next question.

![soldier](/img/soldier-60707_960_720.png)

### 3. Localization icon

In the left corner is the localization indicator. When the `"UA"` symbol is highlighted, the content of the page is displayed in Ukrainian. When the `"RU"` symbol is highlighted, the content of the page is displayed in Russian. You can change the backlight by clicking on the corresponding symbol.

```chuck
      <main className="flex relative">
          <Navbar />
          <div className="ml-60">{children}</div>
        </main>
```

![](/img/soldier-60707_960_720.png)
