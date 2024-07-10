import * as contracts from './contracts.mjs';

if (window) {
    for (const contract_name in contracts) {
        window[contract_name] = contracts[contract_name];
    }
} else {
    for (const contract_name in contracts) {
        global[contract_name] = contracts[contract_name];
    }
}
