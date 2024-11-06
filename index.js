// Write your classes here

// Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }

  // class decidiuos
  class Deciduous extends Tree {
    constructor(species, name){
        super(species);
        this.name = name;
    }

    static definition() {
        return super.definition() + " Deciduous trees shed their leaves annually.";
      }
  }

  // Class Evergreen
  class Evergreen extends Tree {
    constructor (species, name){
        super(species);
        this.name = name;
    }

    static definition() {
        return super.definition() + " Evergreens keep their leaves all year round.";
      }
  }

  // Export the classes for use in the test
  module.exports = { Tree, Deciduous, Evergreen };