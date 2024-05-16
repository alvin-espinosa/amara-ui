export interface reservationModel {
    id: number | string
    contactPerson: string    
    contactNumber: string
    emailAddress: string
    reservationDateTime: Date
    duration: number
    vehicleId: string
    pricePerDay: number
}