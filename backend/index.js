Deno.serve({ port: 3001 }, (_req) => {
  const url = new URL(_req.url);
  // Default path
  if (url.pathname === "/") {
    return new Response("Server Home");
  }

  // Data path (/data)
  if (url.pathname === "/data") {
    const data = JSON.stringify({
      data: [{ name: "Apple" }, { name: "Strawberry" }, { name: "Orange" }],
    });
    return new Response(data, {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Default 404 response
  return new Response("404 Not Found", { status: 404 });
});
