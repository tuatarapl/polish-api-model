import { DictionaryItem, NameAddress, BankAccountInfo, Map, Bank, 
    TransactionInfoTax, ResponseHeader, PageInfo } from '..'

export interface SenderRecipient {
    accountNumber?: string
    accountMassPayment?: string
    bank?: Bank
    nameAddress?: NameAddress
}

export interface AccountBaseInfo {
    accountNumber:	string
    accountTypeName: string
    accountType: DictionaryItem
}

export type AccountHolderType = 'individual' | 'corporation'
export interface AccountInfo {
    accountNumber: string
    nameAddress: NameAddress
    accountType: DictionaryItem
    accountTypeName?: string
    accountHolderType: AccountHolderType
    accountNameClient?: string
    currency: string
    availableBalance: string
    bookingBalance: string
    bank: BankAccountInfo
    auxData: Map
}

export type TransactionCategory = 'CREDIT' | 'DEBIT'
export interface TransactionInfo {
    itemId: string
    amount: string
    currency?: string
    description?: string
    transactionType?: string
    tradeDate?: string
    mcc?: string
    auxData?: Map
    transactionCategory: TransactionCategory
    transactionStatus?: DictionaryItem
    initiator?: NameAddress
    sender?: SenderRecipient
    recipient?: SenderRecipient
    bookingDate?: string
    postTransactionBalance?: string
}

export interface TransactionPendingInfo {
    itemId: string
    amount: string
    currency?: string
    description?: string
    transactionType?: string
    tradeDate?: string
    mcc?: string
    auxData?: Map
    transactionCategory: TransactionCategory
    initiator?: NameAddress
    sender?: SenderRecipient
    recipient?: SenderRecipient
}

export interface TransactionRejectedInfo {
    itemId: string
    amount: string
    currency?: string
    description?: string
    transactionType?: string
    tradeDate?: string
    mcc?: string
    auxData?: Map
    transactionCategory: TransactionCategory
    initiator?: NameAddress
    sender?: SenderRecipient
    recipient?: SenderRecipient
    rejectionReason?: string
    rejectionDate?: string
}

export interface TransactionCancelledInfo {
    itemId: string
    amount: string
    currency?: string
    description?: string
    transactionType?: string
    tradeDate?: string
    mcc?: string
    auxData?: Map
    transactionCategory: TransactionCategory
    transactionStatus?: DictionaryItem
    initiator?: NameAddress
    sender?: SenderRecipient
    recipient?: SenderRecipient
}

export interface TransactionScheduledInfo {
    itemId: string
    amount: string
    currency?: string
    description?: string
    transactionType?: string
    tradeDate?: string
    mcc?: string
    auxData?: Map
    transactionCategory: string
    transactionStatus?: DictionaryItem
    initiator?: NameAddress
    sender?: SenderRecipient
    recipient?: SenderRecipient
}

export interface HoldInfo {
    itemId: string
    amount: string
    currency?: string
    description?: string
    transactionType?: string
    tradeDate?: string
    mcc?: string
    auxData?: Map
    holdExpirationDate?: string
    initiator?: NameAddress
    sender?: SenderRecipient
    recipient?: SenderRecipient
}

export type AdditionalPayorIdType = 'P' | 'R' | '1' | '2'
export interface SocialSecurityPayor {
    nip?: string
    additionalPayorId?: string
    additionalPayorIdType?: AdditionalPayorIdType
}

export interface TransactionInfoZUS {
    payerInfo?: SocialSecurityPayor
    contributionType?: string
    contributionId?: string
    contributionPeriod?: string
    paymentTypeId?: string
    obligationId?: string
}



export interface TransactionInfoCard {
    cardHolder?: string
    cardNumber?: string
}

export interface CurrencyRate {
    rate?: number
    fromCurrency?: string
    toCurrency?: string
}

export interface TransactionDetail {
    baseInfo: TransactionInfo
    zusInfo?: TransactionInfoZUS
    usInfo?: TransactionInfoTax
    cardInfo?: TransactionInfoCard
    currencyDate?: string
    transactionRate?: CurrencyRate[]
    baseCurrency?: string
    amountBaseCurrency?: string
    usedPaymentInstrumentId?: string
    tppTransactionId?: string
    tppName?: string
    rejectionReason?: string
    holdExpirationDate?: string
}