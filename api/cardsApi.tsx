export const getUsers = () => {
  // I had to use fetch here because there was an error with a child dependency of axios
  // I think the issue is related to the stackblitz app
  return fetch('https://randomuser.me/api/?page=3&results=20').then((data) => {
    return data.json();
  });
};
