import { TransactionCategory } from "./types";

export interface  RequestHeaderAIS{
    requestId: string
    userAgent?: string
    ipAddress?: string
    sendDate?: string
    tppId?: string
    token: string
    isDirectPsu?: boolean
}
export interface RequestHeaderAISCallback extends RequestHeaderAIS{
    callbackURL?: string
    apiKey?: string
}



export interface AccountsRequest{
    requestHeader:	RequestHeaderAISCallback
    pageId?: string
    perPage?: number
}

export interface AccountInfoRequest{
    requestHeader: RequestHeaderAIS
    accountNumber: string
}

export interface TransactionInfoRequest {
    requestHeader: RequestHeaderAISCallback
    accountNumber: string
    itemIdFrom?: string
    transactionDateFrom?: string
    transactionDateTo?: string
    bookingDateFrom?: string
    bookingDateTo?: string
    minAmount?: string
    maxAmount?: string
    pageId?: string
    perPage?: number
    type?: TransactionCategory

}