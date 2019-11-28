export default {
    bind(el, bindings, vnode){
        
        const fontMod = bindings.modifiers['font']
        if(fontMod){
            el.style.fontSize = '40px'   
        }

        const delayMod = bindings.modifiers['delay']
        let delay = 0
        if(delayMod){
            delay = 2000
        }

        setTimeout(() => {
            const arg = bindings.arg
            el.style[arg] = bindings.value
        }, delay)
    }

}