import Repository, { apiUrl } from './Repository';
import isEmpty from 'lodash/isEmpty';

class StoreRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getStoreSettings() {
        const reponse = await Repository.get(
            `${apiUrl}/data/settings`
        )
            .then((response) => {
                if (response.data && !isEmpty(response.data)) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }
}

export default new StoreRepository();
