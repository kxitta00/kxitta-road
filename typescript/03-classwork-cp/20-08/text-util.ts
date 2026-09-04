export function reverseText(text: string): string {
    let output: string = ''

    for (let length = text.length - 1; length >= 0; length--) {
        const alphabet = text[length]

        if (alphabet !== ' ')
            output += alphabet
    }

    return output
}

export function reverseTextWithSpaces(text: string): string {
    let output = "";
    for (let i = text.length - 1; i >= 0; i--) {
        let alphabet = text[i]
        output += alphabet
    }
    return output
}

export function filterText(text: string, ...filter: string[]): string {
    for (const f of filter) {
        if (f.length > 1) { //word
            text = text.replaceAll(f, "")
        } else { // 1 charector
            text = text.replaceAll(f.toLowerCase(), "").replaceAll(f.toUpperCase(), "")
        }
    }
    return text
}