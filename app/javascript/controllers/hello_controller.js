import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    console.log("salut les nazes")
  }
  connect() {
    console.log("salut les nazes")
    this.element.textContent = "Hello World!"
    console.log("Hello, Stimulus!", this.element)
  }
}
