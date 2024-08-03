export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
 * [] -> Tout le monde peut y accéder
 * ["disconnected"] -> Seulement les utilisateurs non connectés
 * ["client"] -> Seulement les utilisateurs connectés en tant que client
 * ["admin"] -> Seulement les utilisateurs connectés en tant qu'admin
 * ["client", "admin"] -> Seulement les utilisateurs connectés en tant que client ou admin
 */