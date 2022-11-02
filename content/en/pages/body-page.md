---
page_title: Page Body
page_chapter_name: component
page_chapter_title: Components and functionality
slug: body-page
identifier: body-page
language: en
page_range: 2
---
![body-page](/img/body1.jpg)

### 1. Theory section​

Contains theory and explanations, with examples needed to solve the respective task, task statement and admission criteria.

### 1.1 “Hide theory and task” button at the top of the section[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#11-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%D1%81%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8E-%D0%B8-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B9-%D1%87%D0%B0%D1%81%D1%82%D0%B8-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B0 "Прямая ссылка на этот заголовок")

![“Hide theory and task” button](/img/body2.jpg)

By clicking on this button, the theory section collapses and the editor window expands to the full width of the page. The button shrinks to an icon with no text.

### 1.2. Heading of the theoretical part

![heading of the theoretical part](/img/body3.jpg)

By clicking on the heading, the main theoretical part of the theory section is collapsed, only the formulation of the task and admission criteria remain in the section.

!["theory" button](/img/body4.jpg)

Second click unfolds the theory section to its original state.

### 2. Code editor window

![code editor window](/img/body5.jpg)

* In the editor window there is a start code that needs to be completed according to the task in order to solve the problem.
* You can write code in the line highlighted in gray, in which the cursor is set.
* The start code cannot be edited.
* It is possible to enter characters at the end of blocked lines, but checking such code leads to a compilation error.

### 3. Test menu​​

Located between the code editor window and the results section.

![test menu](/img/body6.jpg)

### 3.1. Check button​

* By clicking the "Check" button, a request is sent to the server to check the code present in the editor window.
* The answer is displayed in the results section. Items that passed the test are shown in green text, those that did not pass are shown in red. An example of checking the start code:

![Check button](/img/body7.jpg)

* If the code in the editor window passes the test and all items in the results section are displayed in green text, the text on the test button changes to "Next Question":

![next question button](/img/body8.jpg)

* Clicking on the "Next question" button opens the page with the next question.

### 3.2. Reset button​

Designed to return the editor window to the start state. Those. all changes are canceled in one click. To prevent accidental reset of the entered code, a modal window is provided with a request to confirm the user's desire to reset the code to its initial state, which appears by clicking on the "Reset" button:

![Reset button](/img/body9.jpg)

By clicking on the "Yes" button in the modal window, the window is closed, the code in the editor is reset to its initial state. By clicking on the "No"button, the window closes, the code in the editor window does not change. Clicking on the gray area or pressing the "Esc" key duplicates pressing the "No" button.

### 3.3. "Hide results section" button​

By clicking on the "Hide results section" button, the results section collapses, the code editor window expands to the full height of the page body, the check menu moves to the bottom of the page, the button text changes to "Show results section".

!["Hide results section" button](/img/body10.jpg)

By clicking on the "Show results section" button, the section expands to its original state.

### 4. Results section​

Designed to display the results of code verification in the editor window.