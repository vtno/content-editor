import Quill from "quill"

const fetchValueFromInputs = (inputsArr) => {
  const reducer = (acc, el) => {
    let temp = {}
    temp[el.getAttribute("id")] = el.value
    return Object.assign(
      acc,
      temp
    )
  }
  const formData = inputsArr.reduce(reducer, {})
  console.log(formData)
  // submit form here, may need jsonapi spec
}

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

  const articleForm = document.forms.namedItem("article-form")
  articleForm.addEventListener("submit", evt => {
    evt.preventDefault()
    const inputs = articleForm.getElementsByClassName("form-input")
    fetchValueFromInputs([].slice.call(inputs))
  })
})


