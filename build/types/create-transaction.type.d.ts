export interface ICreateTransactionParams {
    order_id?: string;
    amount: number;
    name?: string;
    phone?: string;
    mail?: string;
    desc?: string;
    callback: string;
}
export interface ICreateTransactionResult {
    id: string;
    link: string;
}
