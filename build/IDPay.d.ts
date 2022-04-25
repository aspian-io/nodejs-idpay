import { IVerifyTransactionParams } from "./types/verify-transaction.type";
import { ICreateTransactionParams, ICreateTransactionResult } from "./types/create-transaction.type";
import { IInquiryTransactionParams, IInquiryTransactionResult } from "./types/inquiry-transaction.type";
import { IListTransactionsParams, IListTransactionsResult } from "./types/list-transactions.type";
import { IDPayStatusMessagesEnum } from "./types/idpay-status-messages.enum";
declare class IDPay {
    private _headers?;
    /**
     *
     * Initialize IDPay service by using your API KEY in the root of your application
     *
     * @param apiKey  - API KEY string which you get from your IDPay Panel
     * @param sandbox - Set to true if you want to test IDPay in development mode. Default is false
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#cee8b80267 API Reference}
     */
    init(apiKey: string, sandbox?: boolean): void;
    /**
     *
     * Get status message by a status code
     *
     * @param statusCode - The status code which usually gets from responses
     * @returns - Status message
     * @see List of status codes {@link https://idpay.ir/web-service/v1.1/index.html#ad39f18522 Status Codes}
     */
    getStatusMsgByCode(statusCode: number): IDPayStatusMessagesEnum;
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
    createTransaction(params: ICreateTransactionParams): Promise<ICreateTransactionResult>;
    /**
     *
     * Verify an IDPay transaction
     *
     * @param params - The input params of type {@link IVerifyTransactionParams} which is needed to verify an IDPay transaction
     * @returns - The result which contains verified transaction response promise of type {@link IVerifyTransactionParams}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#83f88e9ac0 API Reference}
     */
    verifyTransaction(params: IVerifyTransactionParams): Promise<IVerifyTransactionParams>;
    /**
     *
     * Inquiry about transaction status
     *
     * @param params - The input params of type {@link IInquiryTransactionParams} which is needed to inquire transaction status
     * @returns - The result which contains transaction status info that is a promise of type {@link IInquiryTransactionResult}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#2c4c448629 API Reference}
     */
    inquiryTransaction(params: IInquiryTransactionParams): Promise<IInquiryTransactionResult>;
    /**
     *
     * Get list of IDPay transactions
     *
     * @param params - The input params of type {@link IListTransactionsParams} to get paginated and filtered list of transactions
     * @returns - Result that contains list of transactions which is a promise of type {@link IListTransactionsParams}
     * @see Also checkout {@link https://idpay.ir/web-service/v1.1/index.html#dc1489eb63 API Reference}
     */
    listTransactions(params: IListTransactionsParams): Promise<IListTransactionsResult>;
}
export declare const idPay: IDPay;
export {};
