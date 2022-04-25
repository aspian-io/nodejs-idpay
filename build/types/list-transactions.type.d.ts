import { IDPayPayer } from "./idpay-payer.type";
import { IIDPayPayment } from "./idpay-payment.type";
import { IIDPaySettlement } from "./idpay-settlement.type";
import { IIDPayVerify } from "./idpay-verify.type";
import { IIDPayWage } from "./idpay-wage.type";
export interface IListTransactionsParams {
    page?: number;
    page_size?: number;
    id?: string;
    order_id?: string;
    amount?: number;
    status?: string[];
    track_id?: string;
    payment_card_no?: string;
    payment_hashed_card_no?: string;
    payment_date?: IMinMaxDateRange;
    settlement_date?: IMinMaxDateRange;
}
export interface IMinMaxDateRange {
    min: Date;
    max: Date;
}
export interface IListTransactionsResult {
    attachment: IIDPayListAttachment;
    records: IIDPayListRecord[];
}
export interface IIDPayListAttachment {
    timestamp: Date;
    total_count: number;
    page_count: number;
    current_page: number;
    total_amount: string;
    page_amount: number;
}
export interface IIDPayListRecord {
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
