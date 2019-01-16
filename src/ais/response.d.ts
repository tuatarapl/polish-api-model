import { ResponseHeader, PageInfo } from '..'
import { AccountInfo, AccountBaseInfo } from './types'

export interface AccountResponse {
    responseHeader: ResponseHeader
    account?: AccountInfo
}

export interface AccountsResponse{
    responseHeader: ResponseHeader
    accounts?: AccountBaseInfo[]
    pageInfo?: PageInfo
}