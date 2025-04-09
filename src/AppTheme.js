export const AppTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) 
  && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
{
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
  //when user picks on light mode
  localStorage.theme = "light";

  //user picks dark mode
  localStorage.theme = "dark";

  //user decides to go with the sytem preference
  localStorage.removeItem("theme")
}