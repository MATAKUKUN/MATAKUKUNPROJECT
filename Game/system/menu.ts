class Menu{
    static pos = new Pos(-380,0)
    static speed = new Pos(0,0)
    static draw(){
        if(sentaku <= 0){
            sentaku = 0;
        }
        g.fillStyle = "#333"
        g.fillRect(this.pos.x,0,380,10000)
        g.fillStyle = "#999"
        g.fillRect(this.pos.x,0,350,10000)
        g.fillStyle = "#333"
        //g.fillRect(0,0,350,10000)
        g.font = "italic bold 50px sans-serif";
        g.fillText("自分の畑", 50+this.pos.x, 150);
        g.font = "italic bold 50px sans-serif";
        g.fillText("鍛冶屋", 50+this.pos.x, 250);
        g.font = "italic bold 50px sans-serif";
        g.fillText("直売所", 50+this.pos.x, 350);
        g.font = "italic bold 50px sans-serif";
        g.fillText("移動メニュー", 20+this.pos.x, 50);
        console.log(sentaku)
        switch (sentaku%3) {
            case 0:
                g.fillStyle = "#3FF"
                g.fillRect(0+this.pos.x,100,50,50)
                break;
                case 1:
                    g.fillStyle = "#3FF"
                    g.fillRect(0+this.pos.x,200,50,50)
                    break;
                    case 2:
                        g.fillStyle = "#3FF"
                        g.fillRect(0+this.pos.x,300,50,50)
                        break;
                
            default:
                break;
        }
        this.pos.x = (this.pos.x-this.speed.x)*0.8
        console.log(this.pos.x)
    }
}