import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import routes from "../routes";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import { engine } from "express-handlebars";
import http from "http";
import io from "socket.io";
import DiscordExceptionHandler from "../../handlers/DiscordExceptionHandler";
import helpers from "./view-helpers";

class App {
  publicPath = path.join(__dirname, "..", "..", "public");
  viewsPath = path.join(__dirname, "..", "..", "resources", "views");

  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.livereload();
    this.middlewares();
    this.routes();
    this.socket();
    this.exceptionHandler();
  }

  middlewares() {
    this.app.use(connectLiveReload());
    this.app.engine("hbs", engine({ extname: ".hbs", helpers }));
    this.app.set("views", this.viewsPath);
    this.app.set("view engine", "hbs");

    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use("/public", express.static(this.publicPath));
  }

  livereload() {
    const livereloadServer = livereload.createServer();
    livereloadServer.server.once("connection", () => {
      setTimeout(() => {
        livereloadServer.refresh("/");
      }, 100);
    });

    livereloadServer.watch([this.publicPath]);
  }

  routes() {
    this.app.use("/", routes);
  }

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      DiscordExceptionHandler.capture("global handler", err);
      next();
    });
  }

  socket() {
    /**
     * @type {import('socket.io').Server}
     */
    this.io = io(this.server, {
      cors: {
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
  }
}

export default new App();
