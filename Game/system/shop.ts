class AItem{
    name = "null"
    gold = 100;
    texture = "./assts/Item/null.png"
}

class carrot extends AItem{
    constructor(){
        super()
        this.name = "人参"
        this.gold = 50;
        this.texture = "./assts/Item/carrot.png"
    }
}
class hoe extends AItem{
    constructor(){
        super()
        this.name = "普通の鍬"
        this.gold = 100;
        this.texture = "./assts/Item/hoe.png"
    }
}


class Slop{
    page = 0;
    slopList = [new carrot(),new hoe()]
    mouse = 0;
    draw(){
        var serif = ""
        this.mouse = Math.floor(Mouse.Blockpos.y)
        g.fillStyle = "#999"
        Canvas.resetCanvas()
        serif = "いらっしゃいませ！"
        for (let i = 0; i <10; i++) {
            a = i-this.page
            try{
                Canvas.drawImage("./assts/Item/null.png",0,a*64,900,64)
                Canvas.drawImage("./assts/Item/null.png",0,a*64,90,64)
            
                if(Mouse.Blockpos.y == a){
                    if(!(Mouse.click)){
                    g.fillStyle = "rgb(255 165 0 / 25%)";
                    }else{
                        g.fillStyle = "rgb(255 165 0 / 50%)";
                    }
                    g.font = "10px serif";
                    serif = "これは"+this.slopList[i].name+"だね。"+this.slopList[i].gold+"円で買えますよ"
                    g.fillRect(0,a*64,900,64)
                }
                g.fillStyle = "rgb(0 0 0 / 100%)";
                g.font = "bold 20px メイリオ";
               Canvas.drawImage(this.slopList[i].texture,0,a*64,90,64)
               g.fillText(this.slopList[i].name,100,a*64+50)
               g.fillText(this.slopList[i].gold,400,a*64+50)
               console.log(this.mouse)
            }catch(e){
                //serif = "いらっしゃいませ！"
            }
        }
        g.fillText(serif,0,660)
        g.fillText("買うときは買いたいアイテムの欄をクリックすると、購入できます",0,680)
    }
}
/* */