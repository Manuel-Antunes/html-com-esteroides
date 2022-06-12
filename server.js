import App from "./start/kernel/app";

App.server.listen(3333, () => {
  console.log("Server started on port 3333");
});
