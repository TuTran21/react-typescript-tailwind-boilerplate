export const queryRepo = () =>
  fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json())
