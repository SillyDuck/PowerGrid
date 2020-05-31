const prompt = require('prompt-sync')();

var fuelTypeStr = ["Coal","Oil","Trash","Nuclear","Coal/Oil Mix","Nature","Invalid"]

class PowerStation{
    constructor(){
        this.index_ = 0;
        this.type_ = 0;
        this.consume_ = 0;
        this.supply_ = 0;
    }
    print(){
        console.log("Power Station (%d)",this.index_);
        console.log("%d %s to supply %d houses",this.consume_, 
        fuelTypeStr[this.type_],this.supply_);
    }
    get type(){ return this.type_; }
    get consume(){ return this.consume_; }
}

class Player{
    constructor(){
        this.index_ = 0;
        this.coin_ = 0;
        this.powerStations_ = [];
        this.fuelCapacity_ = [0,0,0,0];
        this.fuelSumCapacity_ = 0;
        this.curFuel_ = [0,0,0,0];
        this.curHouses_ = 0;
    }
    getPowerStation(PowerStation p){
        if(this.powerStations_.length == 3){
            choosePowerStation2Discard()
        }
        this.powerStations_.push(p);
        if(p.type() == 4){
            this.fuelCapacity_[0] += 2*p.consume();
            this.fuelCapacity_[1] += 2*p.consume();
        }else if (p.type() == 5 || p.type() == 6){
            
        }else{
            this.fuelCapacity_[p.type()] += 2*p.consume();
        }
        this.fuelSumCapacity_ = 2*p.consume();
    }
    choosePowerStation2Discard(){
        var a = prompt("Discard which power station? (0/1/2)");
        if(a>=0 && a <=2){
            this.powerStations_.splice(a, 1);
        }
    }
    chooseFuel2GeneratePower(){

    }
    print(){
        console.log("Player (%d)",this.index_);
        console.log("Power Station status:");
        this.powerStations_.forEach(element => {
            element.print();
        });
        console.log("Fuel status:");
        this.curFuel_.forEach((item,index) => {
            console.log(fuelTypeStr[index]+" : "+item.toString());
        });
        console.log("Coin : %d",this.coin_);
    }
}

class DeckMngr{
    constructor(){
        this.decks_ = [];
        this.stage3decks_ = [];
        this.decks_.push(PowerStation(04,0,2,1));
        this.decks_.push(PowerStation(08,0,3,2));
        this.decks_.push(PowerStation(10,0,2,2));
        this.decks_.push(PowerStation(15,0,2,3));
        this.decks_.push(PowerStation(20,0,3,5));
        this.decks_.push(PowerStation(25,0,2,5));
        this.decks_.push(PowerStation(31,0,3,6));
        this.decks_.push(PowerStation(36,0,3,7));
        this.decks_.push(PowerStation(42,0,2,6));

        this.decks_.push(PowerStation(03,1,2,1));
        this.decks_.push(PowerStation(07,1,3,2));
        this.decks_.push(PowerStation(09,1,1,1));
        this.decks_.push(PowerStation(16,1,2,3));
        this.decks_.push(PowerStation(26,1,2,5));
        this.decks_.push(PowerStation(32,1,3,6));
        this.decks_.push(PowerStation(35,1,1,5));
        this.decks_.push(PowerStation(40,1,2,6));

        this.decks_.push(PowerStation(05,4,2,1));
        this.decks_.push(PowerStation(12,4,2,2));
        this.decks_.push(PowerStation(21,4,2,4));
        this.decks_.push(PowerStation(29,4,1,4));
        this.decks_.push(PowerStation(46,4,3,7));
        
        this.decks_.push(PowerStation(06,2,1,1));
        this.decks_.push(PowerStation(14,2,2,2));
        this.decks_.push(PowerStation(19,2,2,3));
        this.decks_.push(PowerStation(24,2,2,4));
        this.decks_.push(PowerStation(30,2,3,6));
        this.decks_.push(PowerStation(38,2,3,7));

        this.decks_.push(PowerStation(11,3,1,2));
        this.decks_.push(PowerStation(17,3,1,2));
        this.decks_.push(PowerStation(23,3,1,3));
        this.decks_.push(PowerStation(28,3,1,4));
        this.decks_.push(PowerStation(34,3,1,5));
        this.decks_.push(PowerStation(39,3,1,6));
        
        this.decks_.push(PowerStation(13,5,0,1));
        this.decks_.push(PowerStation(18,5,0,2));
        this.decks_.push(PowerStation(22,5,0,2));
        this.decks_.push(PowerStation(27,5,0,3));
        this.decks_.push(PowerStation(33,5,0,4));
        this.decks_.push(PowerStation(37,5,0,4));
        this.decks_.push(PowerStation(44,5,0,5));
        this.decks_.push(PowerStation(50,5,0,6));

        this.decks_.push(PowerStation(51,6,0,0));
    }
}

class Pipe{
    constructor(){
        this.cost_ = 0;
        this.headCityIndex_ = -1;
        this.tailCityIndex_ = -1;
    }
}

class City{
    constructor(){
        this.index_ = -1;
        this.name_ = "";
        this.occupiedPlayer_ = [];
        this.edges_ = [];
        this.pipes_ = [];
    }
}

class MapMngr{
    constructor(){
        this.cities_ = [];
    }
}

class MarketMngr{
    constructor(){
        this.publicPowerStations_ = [3,4,5,6];
        this.nextPowerStations_ = [3,4,5,6];
        this.stage3PowerStations_ = [];
    }
}

class AuctionMngr{
    bid(){

    }
    raise(){

    }
    pass(){

    }
}

class FuelMngr{
    constructor(){
        this.coalArray_ =       [1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1];
        this.coalPriceArray_ =  [1,1,1, 2,2,2, 3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8];
        this.oilArray_ =        [0,0,0, 0,0,0, 1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1];
        this.oilPriceArray_ =   [1,1,1, 2,2,2, 3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8];
        this.trashArray_ =      [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 1,1,1, 1,1,1];
        this.trashPriceArray_ = [1,1,1, 2,2,2, 3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8];
        this.nuclearArray_ =    [0,0,0, 0,0,0, 0,0,0, 0,1,1];
        this.nuclearPriceArray_ = [1,2,3,4,5,6,7,8,10,12,14,16];
        this.supplyEachTurn2P_ = [[3,2,1,1], [4,2,2,1], [3,4,3,1]];
        this.supplyEachTurn3P_ = [[4,2,1,1], [5,3,2,1], [3,4,3,1]];
        this.supplyEachTurn4P_ = [[5,3,2,1], [6,4,3,2], [4,5,4,2]];
        this.supplyEachTurn5P_ = [[5,4,3,2], [7,5,3,3], [5,6,5,2]];
        this.supplyEachTurn6P_ = [[7,5,3,2], [9,6,5,3], [6,7,6,3]];
    }
}

class PowerGenerateMngr{
    constructor(){
        this.gainArray = [10,22,33,44,54,64,73,82,90,98,105,112,118,124,129,134,138,142,145,148,150];
    }
}

class PlayerMngr{
    constructor(){
        this.players_ = [];
    }
}

class GameCntlr{
    constructor(){
        this.numPlayer_ = 0;
        this.curStage_ = 0;
        this.playerOrder_ = []
    }
    checkGameEnd(){
          //	2位玩家	3位玩家	4位玩家	5位玩家	6位玩家
// 玩家使用的區域範圍數	3	3	4	5	5
// 遊戲開始時須要移除的電廠數	8	8	4	0	0
// 每位玩家最多可保留的電廠數	4	3	3	3	3
// 進入第二階段時玩家連接城市數	10	7	7	7	6
// 遊戲結束時玩家至少供電城市數	21	17	17	15	14
    }
    sortPlayerOrder(){}
}

class PowerGrid{
    constructor(){
        this.gameCntlr_ = new GameCntlr();
        this.powerGenerateMngr_ = new PowerGenerateMngr();
        this.fuelMngr_ = new FuelMngr();
        this.auctionMngr_ = new AuctionMngr();
        this.marketMngr_ = new MarketMngr();
        this.mapMngr_ = new MapMngr();
        this.deckMngr_ = new DeckMngr();
        this.playerMngr_ = new PlayerMngr();
        this.numPlayer_ = 0;
        this.curStage_ = 0;
    }
    init(){

    }
    startGame(){

    }
}