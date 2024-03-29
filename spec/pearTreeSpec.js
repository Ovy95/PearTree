describe("PearTree", function () {
  

  beforeEach(function(){
    pearTree = new PearTree();
  })

  describe("Tree function,Takes in one argument, checks the roles of the members to see if they're knights updates Pear value accordingly ",function () {
    it("Returns 12 pears as Alice isn't a Knight",function() {
      expect(pearTree.tree({name: "Alice", role: "Software Engineer"})).toEqual(12)
    })
    it("value of pears will be 11 as Jack is a knight and has picked one",function() {
      expect(pearTree.tree({name: "Jack", role: "Knight"})).toEqual(11)
    })

  })
  describe("groupPickers function, Checks for group of pickers and returns the correct result depending on amount of knights in the group",function () {
    
    it("value of pears will be 10 as there are two 'knights' and one 'Software Engineer'",function() {
      expect(pearTree.groupPickers([{name: "Clara", role: "Knight"} ,{name: "Steven", role: "Knight"} ,{name: "Alice", role: "Software Engineer"}])).toEqual(10)
    })

  })
  describe("twelveKnights function, returns the knights names + the Page",function () {
    
    it("The 12 Knights and a Page attempt to pick all the pears off the tree, returns a list of all the Knights who got a Pear and the Page who helped",function() {
      pearTree.groupPickers([
      {name: "Steven1", role: "Knight"} ,{name: "Sally2", role: "Knight"} , {name: "Jack3", role: "Knight"} ,
      {name: "Bob4", role: "Knight"} , {name: "Mark5", role: "Knight"},{name: "Jeff6", role: "Knight"} ,
      {name: "Kev7", role: "Knight"} , {name: "Tails8", role: "Knight"} ,{name: "Peach9", role: "Knight"} ,
      {name: "Rex10", role: "Knight"} ,{name: "Sarah11", role: "Knight"} ,{name: "Alice12", role: "Knight"},
      {name: "Perfecto", role: "Page"}])

      expect(pearTree.twelveKnights()).toEqual([ 'Steven1', 'Sally2', 'Jack3', 'Bob4', 'Mark5', 'Jeff6', 'Kev7', 'Tails8', 'Peach9', 'Rex10', 'Sarah11', 'Alice12', 'Perfecto' ])
    })

  })





})