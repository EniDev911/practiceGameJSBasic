export class Config {
  constructor() {}
  /**
   *
   * @returns {string} 'the abosulte path'
   */
  getAbsolutePath() {
    let loc = window.location;
    let pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf("/") + 1);
    return loc.href.substring(
      0,
      loc.href.length -
        ((loc.pathname + loc.search + loc.hash).length - pathName.length)
    );
  }
  getImagePath(category) {
    return this.getAbsolutePath().concat("public", "/images/", category, "/");
  }
}
