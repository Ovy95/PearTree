class PearTreeEach {

  pears = 12

  tree(isEach){

    if(isEach.role == "Knight" && isEach.name == "Each"){
      this.pears--
    }

  }

  pickers(knights){

    for (let index = 0; index < knights.length; index++) {
      (this.tree(knights[index]))
    }

    return "12 pears hanging high.\n12 knights riding by.\nEach night took a pear\n And left "+this.pears+" hanging there."
  }

 

}