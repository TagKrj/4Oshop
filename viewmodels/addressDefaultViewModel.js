import AddressModel from '../models/addressModel.js';

class AddressDefaultViewModel {
    constructor() {
        this.addressModel = null;
    }

    async fetchAddressDefault(token) {
        try {
            const response = await fetch(`http://20.255.56.110:8000/api/address/me/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                credentials: 'include',
            });
            const data = await response.json();

            if (data && typeof data === 'object') {
                this.addressModel = new AddressModel(
                    data.id,
                    data.lat,
                    data.lng,
                    data.isDefault,
                    data.address,
                    data.phone,
                    data.addressType,
                    data.userId
                );
            }

        } catch (error) {
            console.error(error);
        }
    }
}

export default AddressDefaultViewModel;