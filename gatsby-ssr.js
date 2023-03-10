const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="darkmode"
      dangerouslySetInnerHTML={{
        __html: `(function() {
            function setTheme(theme) {
              window.__theme = theme;

              if (theme === 'dark') {
                document.documentElement.className = 'dark';
              } else {
                document.documentElement.className = 'light';
              }
            };

            window.__setPreferredTheme = function(theme) {
              setTheme(theme);

              try {
                localStorage.setItem('color-theme', theme);
              } catch (e) {
                console.error(e);
              }
            };

            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem('color-theme');
            } catch (e) {
                console.error(e);
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();`,
      }}
    />,
  ]);
};
