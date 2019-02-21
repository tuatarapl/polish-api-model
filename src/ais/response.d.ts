import { ResponseHeader, PageInfo } from '..'
import { AccountInfo, AccountBaseInfo, TransactionInfo } from './types'

export interface AccountResponse {
    responseHeader: ResponseHeader
    account?: AccountInfo
}

export interface AccountsResponse {
    responseHeader: ResponseHeader
    accounts?: AccountBaseInfo[]
    pageInfo?: PageInfo
}

export interface  TransactionsDoneInfoResponse {
    responseHeader: ResponseHeader
    transactions?: 	TransactionInfo[]
    pageInfo?: PageInfo
}