class PearTree {

  pears = 12
  knights = []
  
  tree(isKnight){

    if(isKnight.role == "Knight"){
      this.pears--
      this.knights.push(isKnight.name)
    }
    if(isKnight.role == "Page"){
      this.knights.push(isKnight.name)
    }
  
    return this.pears
  }

  groupPickers(pearPickers){

    for (let index = 0; index < pearPickers.length; index++) {
      (this.tree(pearPickers[index]))
    }

    return this.pears
  }

  twelveKnights(){
    if(this.pears == 0){
      return this.knights
    }

  }



}