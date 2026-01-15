async function loadUser() {
  const user = await userService.getUserByIdSafe(123);
  return user;
}

function saveSession(token: string) {
  localStorage.setItem("token", token);
}

async function bootstrap() {
  const user = await loadUser();
  saveSession(user.token);
  console.log(user.name);
}

const userService = {};

bootstrap();
