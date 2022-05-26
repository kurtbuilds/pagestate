"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageState = void 0;
const react_1 = require("react");
const lib_1 = require("@kurtbuilds/lib");
function usePageState(initial) {
    let [state, set_state] = (0, react_1.useState)(initial ?? {
        loading: true,
    });
    return {
        set_errors: function (e) {
            set_state({
                alerts: ((e instanceof lib_1.GQLErrorGroup) ? e.errors : e).map(e => ({
                    message: e.message,
                    type: 'danger'
                }))
            });
        },
        set_alerts: function (alerts) {
            set_state({ alerts });
        },
        set_loading: function () {
            set_state({
                loading: true,
            });
        },
        set_state: function (state) {
            set_state(state);
        },
        update_state: function (state) {
            set_state(s => ({ ...s, loading: false, ...state }));
        },
        state,
        ...state,
    };
}
exports.usePageState = usePageState;
//# sourceMappingURL=index.js.map