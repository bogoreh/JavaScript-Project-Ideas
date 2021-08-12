import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTtitle("Settings");
    }

    async getHtml() {
        return `
          <h1>Settings</h1>
          <p>Manage your privacy</p>
          `;
    }
}