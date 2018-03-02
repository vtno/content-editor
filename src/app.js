import Quill from "quill"
let state = {
  editorCount: 0 
}

const $ = (selector) => document.querySelector(selector)

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
  const editorData = $(".ql-editor").innerHTML
  console.log(formData)
  console.log(editorData)
  // submit form here, may need jsonapi spec
}

const initQuill = (editorRoot,selector) => {
  console.log(editorRoot)
  const quill = new Quill(selector, {
    modules: { toolbar: [ [{ header: [1, 2, false] }], ["bold", "italic", "underline", "link"]
      ]
    },
    placeholder: "Enter some contents..",
    theme: "bubble"
  })
}

const appendTextEditor = (evt) => {
  evt.preventDefault()
  const editor = document.createElement("div")
  const editorId = `editor-${state.editorCount}` 
  editor.setAttribute("id", editorId)
  const editorRoot = $("#content-root")
  editorRoot.append(editor)
  initQuill(editorRoot, `#${editorId}`)
  state.editorCount += 1
}

document.addEventListener("DOMContentLoaded", () => {
  const articleForm = document.forms.namedItem("article-form")
  $("#add-text-block").addEventListener("click", appendTextEditor)
  articleForm.addEventListener("submit", evt => {
    evt.preventDefault()
    const inputs = articleForm.getElementsByClassName("form-input")
    fetchValueFromInputs([].slice.call(inputs))
  })
})


