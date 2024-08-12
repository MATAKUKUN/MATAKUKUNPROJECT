addEventListener("keypress", (event) => {
    if(scool == 0) {
        switch (event.key) {
            case "1":
                slot = 0
                break;
                case "2":
                    slot = 1
                    break;
                    case "3":
                        slot = 2
                        break;
                        case "4":
                            slot = 3
                            break;
                            case "5":
                                slot = 4
                                break;
                                case "6":
                                    slot = 5
                                    break;
                                    case "7":
                                        slot = 6
                                        break;
                                        case "8":
                                            slot = 7
                                            break;
                                            case "9":
                                                slot = 8
                                                break;
                                                case "10":
                                                    slot = 9
                                                    break;
                                                    case "a":
                                                        Player.x = Player.x-10;
                                                        break;
                                                        case "d":
                                                            Player.x = Player.x+10;
                                                            break;
            default:
                break;
        }
    }
});
addEventListener("keyup", (event) => {
        switch (event.key) {
            case "s":
                if(scool == 0){
                    Menu.speed.x = 0
                    Menu.pos = new Pos(-380,0)
                scool = 1;
                time = 0;
                    a = ''
                    time = 0;
                break;
                }
                if(scool == 2){
                    scool = 0;
                    break;
                }
                break;;
                case "a":
                    sentaku++;
                    break;
                    case "d":
                    sentaku--;
                        break;       
                        case "q":
                            switch (sentaku%3) {
                                case 0:
                                    scool = 0;;
                                    break;
                                    case 1:
                                        scool = 2;
                                        break;
                                
                                default:
                                    break;
                            }
                            break;
            default:
                break;
        }
});