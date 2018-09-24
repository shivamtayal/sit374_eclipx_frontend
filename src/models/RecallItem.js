export const RecallItem =  {
    id: '',
    meta:
    {
        vehicle: {
            manufacturer: '',
            model: '',
            make: '',
            year: '',
            vin: '',
            registration: '',
            vehicleID: '',
            description: '',
        },
        custodian: {
            name: '',
            contactNumber: '',
            email: '',
            organization: '',
            organizationContact: '',
            organizationEmail: '',
            organizationPhone: ''
        }
    },
    communications: [
        {
            from: '',
            to: '',
            body: '',
            medium: '',
            date_created: ''
        }
    ],
    notes: [
        {
            content: '',
            date_created: ''
        }
    ],
};