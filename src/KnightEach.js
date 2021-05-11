class Knight {

  pears = 12

  pearTree(isEach){

    if(isEach.role == "Knight" && isEach.name == "Each"){
      this.pears--
    }

  }

  pickers(knights){

    for (let index = 0; index < knights.length; index++) {
      (this.pearTree(knights[index]))
    }

    return "12 pears hanging high.\n12 knights riding by.\nEach night took a pear\n And left "+this.pears+" hanging there."
  }

 

}