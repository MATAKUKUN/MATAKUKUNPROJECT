class World{
    dataSize = new Pos(Canvas.size.x/64,Canvas.size.y/64)
    data = [
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
    [new Block(new Pos(0,0))],
]
    Init(){
        for (let x = 0; x < this.dataSize.x; x++) {
            for (let y = 0; y < this.dataSize.y; y++) {
                this.data[x][y] = new GrassBlock(new Pos(x,y))
            }
            
        }
    }
    Draw(){
        for (let x = 0; x < this.dataSize.x; x++) {
            for (let y = 0; y < this.dataSize.y; y++) {
                this.data[x][y].draw()
            }
            
        }
    }
}

class texture{
    static grass = "./assts/Block/grass.png"
    static dirt = "./assts/Block/dirt.png"
}

class Block{
    pos = new Pos(0,0)
    size = 64
    texture = texture.grass
    constructor(pos){
        this.pos.x = pos.x
        this.pos.y = pos.y
    }
    draw(){
        Canvas.drawImage(this.texture,this.pos.x*this.size-Camerapos.x,this.pos.y*this.size-Camerapos.y,this.size,this.size)
    }
}

class GrassBlock extends Block{
    texture = texture.grass
}

class dirt extends Block{
    texture = texture.dirt
}