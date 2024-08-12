
const canvas = document.getElementById("Mycanvas")
    const g = canvas.getContext("2d")
    var scool = 0;
    var sentaku = 0;
    var a;
class MATAKU_Array{
    static Copy(b){
        var a = [0,0,0,0,0,0,0,0,0]
        for (let i = 0; i < a.length; i++) {
            a[i] = b[i];
            
        }
        return a;
    }
}

class Item{
    static carrot = 1
}

class Pos{
    x = 0
    y = 0
    constructor(x,y){
        this.x = x
        this.y = y
    }
}
var Camerapos = new Pos(0,0)
var Player = new Pos(0,0)
class Canvas{
    static size = new Pos(700,700)
    static drawImage(src,x,y,dx,dy){
        var img = new Image()
        img.src = src
        g.drawImage(img,x,y,dx,dy)
    }
    static resetCanvas(){
        g.fillRect(0,0,10000,10000)
    }
}