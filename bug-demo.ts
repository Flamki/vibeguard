localStorage.setItem("token", "abc123");

async function test() {
  await fetch("https://example.com");
}

getUserByIdSafe(123);
