declare module "polymer-redux" {
    export interface ReduxClass<Action> {
        /**
         * Returns current store's state.
         * @return {S}
         */
        getState(): any;

        dispatch(name: string, ...optionalParams: any[]): Action;

        dispatch(fn: { (): any }): Action;

        dispatch(action: Action): Action;

    }

    export interface ReduxClassConstructor<Action> {
        new(): ReduxClass<Action> & PolymerElement;
    }

    export interface ReduxMixinType<Action> {
        (parenClass: PolymerElementConstructor): ReduxClassConstructor<Action>
    }

    export default function PolymerRedux<Action, Store>(store: Store): ReduxMixinType<Action>


}