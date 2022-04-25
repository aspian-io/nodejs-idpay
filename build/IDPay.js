"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idPay = void 0;
const axios_1 = __importDefault(require("axios"));
const idpay_status_messages_enum_1 = require("./types/idpay-status-messages.enum");
class IDPay {
    /**
     *
     * Initialize IDPay service by using your API KEY in the root of your application
     *
     * @param apiKey  - API KEY string which you get from your IDPay Panel
     * @param sandbox - Set to true if you want to test IDPay in development mode. Default is false
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#cee8b80267 API Reference}
     */
    init(apiKey, sandbox = false) {
        this._headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
            'X-SANDBOX': sandbox,
        };
    }
    /**
     *
     * Get status message by a status code
     *
     * @param statusCode - The status code which usually gets from responses
     * @returns - Status message
     * @see List of status codes {@link https://idpay.ir/web-service/v1.1/index.html#ad39f18522 Status Codes}
     */
    getStatusMsgByCode(statusCode) {
        return idpay_status_messages_enum_1.IDPayStatusMessagesEnum[`code${statusCode.toString()}`];
    }
    /**
     *
     * Create an IDPay new transaction
     *
     * @param params - The input params of type {@link ICreateTransactionParams} which is needed to create an IDPay transaction
     * @returns - The result which contains created transaction promise of type {@link ICreateTransactionResult}
     * that is advised to save into your database
     * @throws {@link IIDPayError}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#2c82b7acb2 API Reference}
     * @see To see different responses which can get from the endpoint that has been set by using callback param
     * please checkout {@link https://idpay.ir/web-service/v1.1/index.html#972fadbc1d Callback API Reference}
     */
    createTransaction(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const { data } = yield axios_1.default.post('https://api.idpay.ir/v1.1/payment', {
                    order_id: params.order_id,
                    amount: params.amount,
                    name: params.name,
                    phone: params.phone,
                    mail: params.mail,
                    desc: params.desc,
                    callback: params.callback
                }, { headers: this._headers });
                resolve(data);
            }
            catch (error) {
                const err = error;
                reject({
                    error_code: (_a = err.response) === null || _a === void 0 ? void 0 : _a.data.error_code,
                    error_message: (_b = err.response) === null || _b === void 0 ? void 0 : _b.data.error_message
                });
            }
        }));
    }
    /**
     *
     * Verify an IDPay transaction
     *
     * @param params - The input params of type {@link IVerifyTransactionParams} which is needed to verify an IDPay transaction
     * @returns - The result which contains verified transaction response promise of type {@link IVerifyTransactionParams}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#83f88e9ac0 API Reference}
     */
    verifyTransaction(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const { data } = yield axios_1.default.post('https://api.idpay.ir/v1.1/payment/verify', {
                    id: params.id,
                    order_id: params.order_id
                }, { headers: this._headers });
                resolve(data);
            }
            catch (error) {
                const err = error;
                reject({
                    error_code: (_a = err.response) === null || _a === void 0 ? void 0 : _a.data.error_code,
                    error_message: (_b = err.response) === null || _b === void 0 ? void 0 : _b.data.error_message
                });
            }
        }));
    }
    /**
     *
     * Inquiry about transaction status
     *
     * @param params - The input params of type {@link IInquiryTransactionParams} which is needed to inquire transaction status
     * @returns - The result which contains transaction status info that is a promise of type {@link IInquiryTransactionResult}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#2c4c448629 API Reference}
     */
    inquiryTransaction(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const { data } = yield axios_1.default.post('https://api.idpay.ir/v1.1/payment/inquiry', {
                    id: params.id,
                    order_id: params.order_id
                }, { headers: this._headers });
                resolve(data);
            }
            catch (error) {
                const err = error;
                reject({
                    error_code: (_a = err.response) === null || _a === void 0 ? void 0 : _a.data.error_code,
                    error_message: (_b = err.response) === null || _b === void 0 ? void 0 : _b.data.error_message
                });
            }
        }));
    }
    /**
     *
     * Get list of IDPay transactions
     *
     * @param params - The input params of type {@link IListTransactionsParams} to get paginated and filtered list of transactions
     * @returns - Result that contains list of transactions which is a promise of type {@link IListTransactionsParams}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#dc1489eb63 API Reference}
     */
    listTransactions(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const { data } = yield axios_1.default
                    .post(`https://api.idpay.ir/v1.1/payment/transactions?page=${params.page}&page_size=${params.page_size}`, {
                    id: params.id,
                    order_id: params.order_id,
                    amount: params.amount,
                    status: params.status,
                    track_id: params.track_id,
                    payment_card_no: params.payment_card_no,
                    payment_hashed_card_no: params.payment_hashed_card_no,
                    payment_date: params.payment_date,
                    settlement_date: params.settlement_date
                }, { headers: this._headers });
                resolve(data);
            }
            catch (error) {
                const err = error;
                reject({
                    error_code: (_a = err.response) === null || _a === void 0 ? void 0 : _a.data.error_code,
                    error_message: (_b = err.response) === null || _b === void 0 ? void 0 : _b.data.error_message
                });
            }
        }));
    }
}
// exporting a singleton instance of IDPay class
exports.idPay = new IDPay();
