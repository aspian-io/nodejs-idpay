import { IIDPayPayment } from "./idpay-payment.type";
import { IIDPayVerify } from "./idpay-verify.type";
export interface IVerifyTransactionParams {
    id: string;
    order_id: string;
}
export interface IVerifyTransactionResult {
    status: number;
    track_id: number;
    id: string;
    order_id: string;
    amount: number;
    date: Date;
    payment: IIDPayPayment;
    verify: IIDPayVerify;
}
