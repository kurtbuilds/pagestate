import { Alert, GQLErrorGroup } from "@kurtbuilds/lib";
declare type PageState<T> = T | {
    alerts: Alert[] | null;
} | {
    loading: boolean;
};
declare type PageStateHook<T> = Partial<T> & {
    set_errors: (e: GQLErrorGroup | Error[]) => void;
    set_alerts: (alerts: Alert[]) => void;
    set_loading: () => void;
    state: T;
    set_state: (state: PageState<T>) => void;
    update_state: (state: Partial<T>) => void;
    loading: boolean;
    alerts: Alert[] | null;
};
export declare function usePageState<T extends object>(initial?: T): PageStateHook<T>;
export {};
