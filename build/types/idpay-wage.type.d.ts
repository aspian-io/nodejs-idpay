export interface IIDPayWage {
    by: IDPayWageByEnum;
    type: IDPayWageTypeEnum;
    amount: number;
}
export declare enum IDPayWageByEnum {
    payee = "payee",
    payer = "payer"
}
export declare enum IDPayWageTypeEnum {
    amount = "amount",
    percent = "percent",
    stair = "stair"
}
