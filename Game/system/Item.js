class Enventry{
    static Stak = [64,4]
    static enventryIntCopy = [0,0,0,0,0,0,0,0];
    static enventryTypeCopy = [0,0,0,0,0,0,0,0];
    static enventryInt = [0,0,0,0,0,0,0,0,0];
    static enventryType = [2,0,0,0,0,0,0,0,0,0];
    texture = texture.Grass
    draw(){
        for (let i = 0; i <9; i++) {
            this.texture = "./assts/Item/null.png"
            Canvas.drawImage(this.texture,(i*70)+35,600,60,60)
            if(slot == i){
                g.fillStyle = "rgb(255 105 0 / 50%)";
                g.fillRect((i*70)+35,600,60,60)
            }   
            switch (Enventry.enventryType[i]) {
                case 1:
                   this.texture = "./assts/Item/carrot.png"
                    Canvas.drawImage(this.texture,(i*70)+35,600,60,60)  
                    break;
                    case 2:
                        this.texture = "./assts/Item/hoe.png"
                        Canvas.drawImage(this.texture,(i*70)+35,600,60,60)  
                        break;
                default:
                    break;
            }
            g.fillStyle = "#000"
            g.font = "bold 20px メイリオ";
           g.fillText(Enventry.enventryInt[i], i*70+70, 655);
        }
    }
    addItem(Items){
        Enventry.enventryIntCopy = MATAKU_Array.Copy(Enventry.enventryInt)
        Enventry.enventryTypeCopy = MATAKU_Array.Copy(Enventry.enventryType)
        var ia = 0;
        var a =  Enventry.Stak[Items-1]
        for (let i = 0; i < 9; i++) {
            Enventry.enventryTypeCopy[Enventry.enventryIntCopy.indexOf(a)] = -10;
            Enventry.enventryIntCopy[Enventry.enventryIntCopy.indexOf(a)] = -10;
           }
           if((Enventry.enventryTypeCopy.indexOf(Items) == -1)){
            //console.log(Enventry.enventryIntCopy.indexOf(0))
            Enventry.enventryType[Enventry.enventryIntCopy.indexOf(0)] = Items
           }else{
           Enventry.enventryInt[Enventry.enventryTypeCopy.indexOf(Items)]++
           }
        }
    removeItem(Items,numder){
        Enventry.enventryInt[numder]--
        if( Enventry.enventryInt[numder] <= 0){
            Enventry.enventryType[numder] = 0;
            Enventry.enventryInt[numder] = 0;
        }
    }
    addItems(Items,a){
        for (let i = 1; i < a; i++) {
            this.addItem(Items)
        }
    }
}