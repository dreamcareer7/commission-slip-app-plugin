import * as Ui from '@material-ui/core'

export type ConfirmRoleStatus = 'Validating' | 'Listing' | 'Upserting' | 'Selecting' | 'Skipped'

export type RoleType = "Buyer" | "Seller" | "BuyerLawyer" | "SellerLawyer"

export type GCIUnit = "$" | "%" | ""

export interface SelectData {
    label: string,
    value: string,
}

export interface IGCIInfoItemProps {
    Ui: typeof Ui
    // itemData: ItemData
    role: IDealRole
    GCIValue: Number
    index: number
}

export interface AgentData {
    id: IDealRole['id']
    legal_full_name: IDealRole['legal_full_name']
    role: IDealRole['role']
    sharePercent: Number,
    note: string,
}

export interface AppContextApi {
    GCIUnit: GCIUnit
    setGCIUnit?: (GCIUnit: GCIUnit) => void
    GCIValue: Number
    setGCIValue?: (GCIValue: Number) => void
    agentDataList: AgentData[]
    setAgentDataList?: (data: AgentData[]) => void
    testData: string,
    setTestData?: (data: string) => void,
}

export interface IQuestionProps {
    hooks: EntryProps['hooks']['wizard']
    models: EntryProps['models']
    api: EntryProps['api']
    Components: EntryProps['Components']
    Wizard: CoreComponents['Wizard']
    roleType?: RoleType
    // agentShareInfoList?: Array<any>
    // setAgentShareInfoList?: (value: Array<any>) => void
    // GCIUnit?: "%" | "$" | ""
    // setGCIUnit?: (value: "%" | "$" | "") => void
    utils: {
        notify: (data: NotificationData) => void
        notifyOffice: (comment: string) => Promise<void>
    }
}

export interface IDatePickerProps {
    Picker: CoreComponents['DatePicker']
    value: Date
    setValue: (date: Date) => void
    label: string
}


