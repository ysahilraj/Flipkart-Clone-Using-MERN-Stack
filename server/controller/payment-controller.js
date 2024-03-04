import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../index.js';

import https from 'https';



export const addPaymentGateway = async (request, response) => {
    const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams,paytmMerchantkey);
    try {
        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({error:error.message })
    }
}

