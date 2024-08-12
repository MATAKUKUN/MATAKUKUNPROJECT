class Mouse{
    static pos = new Pos(0,0)
    static Blockpos = new Pos(0,0)
    static click = false
    constructor(){
        addEventListener("mousemove", (event) => {});
        addEventListener('click', this.onclick, false);
onmousemove = (event) => {
    Mouse.pos.x = event.offsetX;
    Mouse.pos.y = event.offsetY;
    Mouse.Blockpos.x = Math.round((Mouse.pos.x-32)/64)
    Mouse.Blockpos.y = Math.round((Mouse.pos.y+32)/64)-1
};
    }
    onclick(e){
            Mouse.click = true
    }
}