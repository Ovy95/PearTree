describe("PearTreeEach", function () {
  

  beforeEach(function(){
    pearTreeEach = new PearTreeEach();
  })

  describe("Check Names and Role in object matching to Each and Knight ",function () {

  it("12 Knights and a Page attempt to pick all the pears off the tree",function() {
    expect(pearTreeEach.pickers([
    {name: "Jack1", role: "Knight"} ,{name: "Sally2", role: "Knight"} , {name: "Jack3", role: "Knight"} ,
    {name: "Bob4", role: "Knight"} , {name: "Mark5", role: "Knight"},{name: "Jeff6", role: "Knight"} ,
    {name: "Kev7", role: "Knight"} , {name: "Each", role: "Knight"} ,{name: "Peach9", role: "Knight"} ,
    {name: "Rex10", role: "Knight"} ,{name: "Sarah11", role: "Knight"} ,{name: "Alice12", role: "Knight"},
    {name: "Perfecto", role: "Page"}])).toEqual("12 pears hanging high.\n12 knights riding by.\nEach night took a pear\n And left "+11+" hanging there.")
  })
  })

})