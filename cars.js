class Vehicle
{
    constructor(make, model, year)
    {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    type(make) 
    {
        console.log(`${this.make} Toyota`);
    }
}
  
{
    class Car extends Vehicle 
    {
        type() 
        {
          super.type();
          console.log(`${this.name} has 5 doors`);
        }
    }
    
}