import AbstractView from "./AbstractView.js";

export default class extends AbstractView() {
    construtor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
         <h1>Posts</h1>
         <p>Your are viewing the posts</p>
         `;
    }
}