import { ReactNode, useContext} from "react";
import React from "react";
import { RealitimeSubscribeChatStateProvider } from "./RealtimeSubscribeChatProvider";

type RealtimeDataAction = "sendmessage"
type RealtimeDataCmd = "TEXT" | "WHITEBOARD"

type Props = {
    children: ReactNode;
};

export type RealtimeData = {
    uuid: string
    action: RealtimeDataAction
    cmd: RealtimeDataCmd
    data: any
    createdDate: number
    senderName: string
}

export interface RealitimeSubscribeStateValue {
}

export const RealitimeSubscribeStateContext = React.createContext<RealitimeSubscribeStateValue | null>(null)


export const useRealitimeSubscribeState = (): RealitimeSubscribeStateValue => {
    const state = useContext(RealitimeSubscribeStateContext)
    if (!state) {
        throw new Error("Error using RealitimeSubscribe in context!")
    }
    return state
}

export const RealitimeSubscribeStateProvider = ({ children }: Props) => {
    const providerValue = {
    }
    return (
        <RealitimeSubscribeStateContext.Provider value={providerValue}>
            <RealitimeSubscribeChatStateProvider>
                {children}
            </RealitimeSubscribeChatStateProvider>
        </RealitimeSubscribeStateContext.Provider>
    )
}

