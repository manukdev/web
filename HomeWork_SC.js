 // Xndir-1
function x (x) {
    let a = Math.floor(x);
   let str = x + ""
    let bool = false
    let b = ""
    for (const strElement of str) {
        if(bool === true) {
            b += strElement
        }
        if (strElement === "." ) {
            bool = true
        }
    }
    console.log(a)
    console.log(parseInt(b))
}

