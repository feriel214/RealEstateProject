export class PropertyDetails {
        IdProp: number;
        Name :string;
        Description:string;
        agency: any=[]; 
        ServiceType:any=[];
        PropertyType:any=[];
        HousingType:any=[];
        LivingRoomCount: number;
        KitchenCount:number;
        BathRoomCount:number;
        AccommodatesCount:number;
        Price:number;
        IsBoosted:boolean;
        PriceType:number;
        Currency:number;
        Status:boolean;
        Location: any;
        /******************* One To Many Relations **********************/
        Installations:any=[]; //Into Property we have a list of installation 
        Beds:any=[]; ; //Into Property we have a list of beds 
        PropImages:any; // Into Property we have a list of pictures 
       

        //EquipementProperties: any; //Into Property we have a list of installation
        //RulesProperties: any;
        /*
         Owner:any=[];
          Category:any=[];
           Category:any=[];
          Size:Location;
         */

    
}
