export const facilityList = [
    {
        id:1,
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg",
        name: "PHÒNG SUITE HƯỚNG BIỂN",
        area: "Diện tích phòng: 85.8 m2",
        price: "20000",
        maxPeople: 4,
        rentalType:'Ngày',
        facilityTypeId:1,
        standardRoom: 'Vip',
        otherAmenities: 'Karaoke',
        poolArea: 6,
        numberOfFloors: 5,
        facilityFree: "???",
        rentType: {
            id: 1,
            name: 'Villa'
        }
    },
    {
        img: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-768x497.jpg",
        name: "PHÒNG DELUXE HƯỚNG BIỂN",
        area: "Diện tích phòng: 40.1 m2",
        price: "20000",
        maxPeople: 4,
        rentalType:'Tháng',
        facilityTypeId:2,
        standardRoom: 'Vip',
        otherAmenities: 'Karaoke',
        poolArea: 6,
        numberOfFloors: 5,
        facilityFree: "???",
        rentType: {
            id: 1,
            name: 'Villa'
        }
    },
    {
        img: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-768x497.jpg",
        name: "PHÒNG SUPERIOR HƯỚNG HỒ",
        area: "Diện tích phòng: 43.7 m2",
        price: "20000",
        maxPeople: 4,
        rentalType:'Năm',
        facilityTypeId:3,
        standardRoom: 'Vip',
        otherAmenities: 'Karaoke',
        poolArea: 6,
        numberOfFloors: 5,
        facilityFree: "???",
        rentType: {
            id: 1,
            name: 'Villa'
        }
    },

];
export const facilityType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
];

export const rentType = [
    {
        id: 1,
        name: 'Villa'
    },
    {
        id: 2,
        name: 'House'
    },
    {
        id: 3,
        name: 'Phòng'
    }

]
// // eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default facilityList;