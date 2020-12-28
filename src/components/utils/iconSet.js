import Leaflet from "leaflet";

const genderIcons = {
    "Male": new Leaflet.icon({
        iconUrl: '/icons/Male.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Female": new Leaflet.icon({
        iconUrl: '/icons/Female.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Unknown": new Leaflet.icon({
        iconUrl: '/icons/Unknown.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    })
};

const ageIcons = {
    "Child": new Leaflet.icon({
        iconUrl: '/icons/Child.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Adult": new Leaflet.icon({
        iconUrl: '/icons/Adult.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Elderly": new Leaflet.icon({
        iconUrl: '/icons/Elderly.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Unknown": new Leaflet.icon({
        iconUrl: '/icons/Unknown.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    })
};

// Not a huge fan of this, but it allows age to be easier to interface with
export const iconSet = {
    "Sex": (sex)=>{
        return genderIcons[sex];
    },
    "Age": (age)=>{
        if(age === "Unknown") return ageIcons["Unknown"];
        age = parseInt(age);
        if(age < 18) {
            console.log("Child Found");
            return ageIcons["Child"];
        }
        else if(age >= 45) {
            return ageIcons["Elderly"];
        }
        else {
            return ageIcons["Adult"];
        }
    }
}