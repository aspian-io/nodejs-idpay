import { IDPayPayer } from "./idpay-payer.type";
import { IIDPayPayment } from "./idpay-payment.type";
import { IIDPaySettlement } from "./idpay-settlement.type";
import { IIDPayVerify } from "./idpay-verify.type";
import { IIDPayWage } from "./idpay-wage.type";
export interface IInquiryTransactionParams {
    id: string;
    order_id: string;
}
export interface IInquiryTransactionResult {
    status: number;
    track_id: number;
    id: string;
    order_id: string;
    amount: number;
    wage: IIDPayWage;
    date: Date;
    payer: IDPayPayer;
    payment: IIDPayPayment;
    verify: IIDPayVerify;
    settlement: IIDPaySettlement;
}
