export interface RequestHeaderAISCallback{
    requestId: string
    userAgent?: string
    ipAddress?: string
    sendDate?: string
    tppId?: string
    token: string
    isDirectPsu?: boolean
    callbackURL?: string
    apiKey?: string
 }

export interface AccountsRequest{
    requestHeader:	RequestHeaderAISCallback
    pageId?: string
    perPage?: number
}