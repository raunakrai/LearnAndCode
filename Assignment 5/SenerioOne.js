try 
{
  function CarAccidentByWoman() 
  {
    console.log("Women did accident of her Car");
  }

  function shockedReactionByMan() 
  {
    console.log(
      "Man is shocked after doing the accident and defending himself"
    );
  }

  CarAccidentByWoman();
  shockedReactionByMan();
} catch (error) 
{
  function BlameOfCarAccident(error) 
  {
    console.log("Cry and blame man for accident", error.message);
  }

  function apologizeToWoman(error) 
  {
    console.log("Say sorry to Woman and pay money", error.message);
  }

  BlameOfCarAccident(error);
  apologizeToWoman(error);
} finally 
{
  console.log("take the car to mechanic");
}
