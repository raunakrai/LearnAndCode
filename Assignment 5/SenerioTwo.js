function driveCar() 
{
    console.log("Drive Car on road");
}

try 
{
    driveCar();
} 
catch (error) 
{
    console.error("An error occurred while driving:", error)
    function shockedReactionByMan() 
    {
        console.log("Show Shocked reaction after seeing accident");
    }

    function cryAfterAccident() 
    {
        console.log("Woman crying after doing accident");
    }

    function claimInsuranceForDamage() 
    {
        console.log("Claim insurance and repair car");
    }

    shockedReactionByMan();
    cryAfterAccident();
    claimInsuranceForDamage();
}