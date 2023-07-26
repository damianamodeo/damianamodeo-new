export function appInit(): void {
  if (!localStorage.getItem('initID')) {
    localStorage.setItem('initID', Date.now().toString());
  }
  if (localStorage.getItem('usehooks-ts-ternary-dark-mode')) {
  }

  const light = document.querySelector('#light-theme');
  if (localStorage.getItem('usehooks-ts-ternary-dark-mode') === '"dark"') {
    light?.setAttribute('content', '#282828');
  }

  const dark = document.querySelector('#dark-theme');
  if (localStorage.getItem('usehooks-ts-ternary-dark-mode') === '"light"') {
    dark?.setAttribute('content', '#d8d8d8');
  }

  window.addEventListener('load', function () {
    window.history.pushState({}, '');
  });
}

export default appInit;
