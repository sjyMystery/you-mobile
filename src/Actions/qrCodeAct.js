// Generated by CoffeeScript 2.0.0-beta4
import * as TYPES from './types';

import * as contact from './contactAct';

import {
    output_error
} from './mainAct';

export var scanQRCode = (data) => {
    return (dispatch) => {
        var error, res;
        try {
            res = JSON.parse(data);
            switch (res.type) {
                case 'add_contact':
                    return dispatch(contact.addContactByQRCode(res.token));
            }
        } catch (error1) {
            error = error1;
            return dispatch(output_error(error));
        }
    };
};

//# sourceMappingURL=qrCodeAct.js.map
