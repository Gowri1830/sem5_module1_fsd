const vehicle =
{
    vname : "car",
    tyres : 4,
    print_tyres:function(tyres)
    {
        this.tyres=tyres;
        console.log("no of tyres are",tyres);
    }
    
};
vehicle.print_tyres(6);
