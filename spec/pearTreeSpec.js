describe("PearTree", function () {
  

  beforeEach(function(){
    pearTree = new PearTree();
  })

  describe("Tree function,Takes in one argument being an object and default value of pears ",function () {
    it("hardcoded returns value of pears",function() {
      expect(pearTree.tree({name: "Alice", role: "Software Engineer"})).toEqual(12)
    })
    it("value of pears will be 11 as knight has picked one",function() {
      expect(pearTree.tree({name: "Clara", role: "Knight"})).toEqual(11)
    })

  })



})