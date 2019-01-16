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