import { User } from "./User";
import { Company } from "./Company";

interface Mappable {
    location: {
        lat: number,
        lng: number,
    };
    popupRenderer() : string,
}

export class CustomMap {
    googleMap : google.maps.Map;

    constructor(divId: string){
        const htmlDiv = document.getElementById(divId)!;
        this.googleMap = new google.maps.Map(htmlDiv,{
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
            maxZoom: 12,
        })
    }

    addMarker(markable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markable.location.lat,
                lng: markable.location.lng,
            }
        });
        marker.addListener("click",()=>{
            const infoPopup = new google.maps.InfoWindow({
                content: markable.popupRenderer(),
            });
            infoPopup.open(this.googleMap,marker);
        });

    }
   
}