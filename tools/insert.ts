import {Editor, moment, Plugin} from "obsidian";

export default class inserting extends Plugin {
    async onload() {
        this.addCommand({
            id: "insert-todays-date",
            name: "Insert today's date",
            editorCallback: (editor: Editor) => {
                editor.replaceRange(
                    moment().format("YYYY-MM-DD"),
                    editor.getCursor()
                )
            }
        })
    }
}