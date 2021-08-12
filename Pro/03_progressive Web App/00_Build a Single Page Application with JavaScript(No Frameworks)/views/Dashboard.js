import AbstractView from "./views/AbstractView.js";

export default class extends AbstractView() {
    construtor() {
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
         <h1>Welcoem back, Dom</h1>
         <p>Consistency is harder when no one is clapping for you.</p>
         <p><a href="/posts" data-link>View recent posts</a></p>
         `;
    }
}