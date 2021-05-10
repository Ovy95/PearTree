class PearTree {

  pears = 12
  tree(isKnight){

    if(isKnight.role == "Knight"){
      this.pears--
    }
  
    return this.pears
  }

  groupPickers(pearPickers){

    for (let index = 0; index < pearPickers.length; index++) {
      (this.tree(pearPickers[index]))
    }

    return this.pears
  }



}