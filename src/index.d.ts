export interface DictionaryItem {
    code?: string
    description?: string
}
export interface AccountBaseInfo {
    accountNumber:	string
    accountTypeName: string
    accountType: DictionaryItem
}

export interface NameAddress {
    value?: string[]
}

type Address = string[]

export interface BankAccountInfo {
    bicOrSwift?: string
    name?: string
    address?: Address
}
export interface Map {
    [key: string]: string
}

export interface Bank {
    bicOrSwift?: string
    name?: string
    code?: string
    countryCode?: string
    address?: Address
}

export type PayorIdType = 'N' | 'P' | 'R' | '1' | '2' | '3'
export interface Payor {
    payorId: string
    payorIdType: PayorIdType
}

export interface TransactionInfoTax {
    payerInfo: Payor
    formCode: string
    periodId: string
    periodType: string
    year: number
    obligationId?: string
}



export type DeliveryMode = 'ExpressD0' | 'StandardD1'
export type DeliveryModeNonEEA = 'ExpressD0' | 'UrgentD1' | 'StandardD2'
export type DomesticTransferSystem = 'Elixir' | 'ExpressElixir' | 'Sorbnet' |  'BlueCash' |  'Internal'
export type EEATransferSystem = 'SEPA' | 'InstantSEPA' | 'Target'
export type NonEEATransferSystem = 'Swift'
export type TaxTransferSystem = 'Elixir' | 'ExpressElixir'
export type ExecutionMode = 'Immediate' | 'FutureDated' | 'Recurring'
export type DayOffOffsetType = 'before' | 'after'
export type PeriodType = 'day' | 'week' | 'month'
export type TypeOfTransfers = 'domestic' | 'EEA' | 'nonEEA' | 'tax'
export interface RecipientPIS {
    accountNumber: string
    nameAddress: NameAddress
}

export interface RecipientPISForeign {
    accountNumber: string
    name: string
    address: Address
}

export interface RecipientPISTax {
    accountNumber: string
    nameAddress: NameAddress
}

export interface SenderPISDomestic {
    accountNumber?: string
    nameAddress?: NameAddress  
}

export interface SenderPISForeign {
    accountNumber?: string
    name?: string 
}

export interface RecurringTransferFrequency {
    periodType:	PeriodType
    periodValue: number
}

export interface RecurringTransferParameters {
    startDate: string
    frequency: RecurringTransferFrequency
    endDate: string
    dayOffOffsetType: DayOffOffsetType
}

export interface TransferData {
    description: string
    amount: string
    executionDate?: string
    recurrence?: RecurringTransferParameters
    currency?: string
}

export interface TransferDataCurrencyRequired extends TransferData {
    currency: string
}

export interface TransferDataCurrencyRequiredTax {
    amount: string
    executionDate?: string
    recurrence?: RecurringTransferParameters
    currency: string
}

export interface PaymentDomestic {
    recipient: RecipientPIS
    sender: SenderPISDomestic
    transferData: TransferData
    tppTransactionId: string
    deliveryMode: DeliveryMode
    system?: DomesticTransferSystem
    hold?: boolean
    executionMode?: ExecutionMode
}

export interface PaymentEEA {
    recipient: RecipientPISForeign
    sender: SenderPISForeign
    transferData: TransferDataCurrencyRequired
    tppTransactionId: string
    deliveryMode: DeliveryMode
    system?: EEATransferSystem
    hold?: boolean
    executionMode?: ExecutionMode
}

export interface PaymentNonEEA {
    recipient: RecipientPISForeign
    recipientBank: Bank
    sender: SenderPISForeign
    transferData: TransferDataCurrencyRequired
    transferCharges: string
    tppTransactionId: string
    deliveryMode: DeliveryModeNonEEA
    system?: EEATransferSystem
    hold?: boolean
    executionMode?: ExecutionMode
}

export interface PaymentTax {
    recipient: RecipientPISTax
    sender: SenderPISDomestic
    transferData: TransferDataCurrencyRequiredTax
    usInfo: TransactionInfoTax
    tppTransactionId: string
    deliveryMode: DeliveryMode
    system?: DomesticTransferSystem
    hold?: boolean
    executionMode?: ExecutionMode
}

export interface PaymentBundle {
    tppBundleId: string
    transfersTotalAmount: string
    typeOfTransfers: TypeOfTransfers
    domesticTransfers?: PaymentDomestic[]
    EEATransfers?: PaymentEEA[]
    nonEEATransfers?: PaymentNonEEA[]
    taxTransfers?: PaymentTax[]
}

export interface RequestHeaderCallback {
    requestId: string
    userAgent?: string
    ipAddress?: string
    sendDate?: string
    tppId?: string
    token: string
    callbackURL?: string
    apiKey?: string
}
interface PaymentRequest {
    requestHeader: RequestHeaderCallback
}

export type PaymentDomesticRequest = PaymentDomestic & PaymentRequest
export type PaymentEEARequest = PaymentEEA & PaymentRequest
export type PaymentNonEEARequest = PaymentNonEEA & PaymentRequest
export type PaymentTaxRequest = PaymentTax & PaymentRequest
export type PaymentBundleRequest = PaymentBundle & PaymentRequest

export interface ResponseHeader {
    requestId?: string
    sendDate?: string
    isCallback?: boolean
}    

export interface PageInfo {
    previousPage?: string
    nextPage?: string
}

export * from './ais'
