import Quill from "quill"

document.addEventListener("DOMContentLoaded", () => {
  const editor = new Quill("#editor", {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["image", "code-block"]
      ]
    },
    placeholder: "Enter some contents..",
    theme: "snow"
  })
})
