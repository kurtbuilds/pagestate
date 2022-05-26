import {useState} from "react";
import { Alert , GQLErrorGroup} from "@kurtbuilds/lib"

type PageState<T> = T | {
    alerts: Alert[] | null
} | { loading: boolean }

type PageStateHook<T> = Partial<T> & {
    set_errors: (e: GQLErrorGroup | Error[]) => void,
    set_alerts: (alerts: Alert[]) => void,
    set_loading: () => void,
    state: T,
    set_state: (state: PageState<T>) => void,
    update_state: (state: Partial<T>) => void,
    loading: boolean,
    alerts: Alert[] | null,
}

export function usePageState<T extends object>(initial?: T): PageStateHook<T> {
    let [state, set_state] = useState<PageState<T>>(initial ?? {
        loading: true,
    })

    return {
        set_errors: function (e: GQLErrorGroup | Error[]) {
            set_state({
                alerts: ((e instanceof GQLErrorGroup) ? e.errors : e).map(e => ({
                    message: e.message,
                    type: 'danger'
                }))
            })
        },
        set_alerts: function (alerts: Alert[]) {
            set_state({alerts})
        },
        set_loading: function () {
            set_state({
                loading: true,
            })
        },
        set_state: function (state: PageState<T>) {
            set_state(state)
        },
        update_state: function (state: Partial<T>) {
            set_state(s => ({...s, loading: false, ...state}))
        },
        state,
        ...state,
    } as PageStateHook<T>
}
