var w = new World()
w.Init()
var e = new Enventry()
var slot = 1;
function draw(){
        Canvas.resetCanvas()
    w.Draw()
    console.log(Mouse.click)
    g.fillRect(Mouse.Blockpos.x*64,Mouse.Blockpos.y*64,64,64)
    var e = new Enventry()
    e.draw()
}
function clickEvent(){
    if(Mouse.click){
        switch (Enventry.enventryType[slot]) {
            case 2:
                w.data[Mouse.Blockpos.x][Mouse.Blockpos.y] = new dirt(new Pos(Mouse.Blockpos.x,Mouse.Blockpos.y))
                console.log("鍬を使用した")
                break;
        
            default:
                break;
        }
        g.fillStyle = "rgb(255 165 0 / 50%)";
        Mouse.click = false
        e.removeItem(slot,slot)
    }else{
        g.fillStyle = "rgb(255 165 0 / 25%)";
    }
}
var mouse = new Mouse()
var time = 0
e.addItems(2,20)
function main() {
    time++;
    if(scool == 0){
        time = 0
    clickEvent()
draw()
//Menu.draw()
    }
    if(scool == 1){
        scool = 2
        time = -9;
        w.Draw()
        e.draw()
        Menu.draw()
        if((sentaku %2)== 0){
        }
        if((sentaku %2)== 1){
            
        }
    }
    console.log(scool,time)
requestAnimationFrame(main)
}
function slop() {
}
window.addEventListener('DOMContentLoaded', function(){
  
    // 0.5秒ごとに実行
    setInterval(() => {
        if(scool == 2){
        var s = new Slop()
        s.draw()
      Mouse.click = false
    }}, 100);});
requestAnimationFrame(main)