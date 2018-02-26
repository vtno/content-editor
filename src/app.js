import Quill from "quill"

var editors = []

document.addEventListener("DOMContentLoaded", () => {
  const editor = new Quill(".editor", {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        [{ align: [] }],
        ["image", "video"],
        ["link", "code-block"]
      ]
    },
    placeholder: "Enter some contents..",
    theme: "snow"
  })
})
