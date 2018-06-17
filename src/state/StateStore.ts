interface IStateStore {
    state: {};
    set(key: string, val: any): void
    setMany({}): void
    get(key: string): any | null
    subscribe(listener :any) : void
    onStoreChanged() : void
}

export class StateStore implements IStateStore {
    listeners: Function[];
    static instance: IStateStore;
    static FirstUse = 1;

    Users : any[];
    Groups : any[];
    Data : any[];
    currentUser : {Name};
    Reciver : any;
    HoldReciver : any;
    LogOutState : boolean;
    LogInState : boolean;
    TreeState : any;

    state: {} = {
        Users : null,
        Groups : null,
        Data : null,
        currentUser : null,
        Reciver : null,
        HoldReciver : null,
        LogOutState : false,
        LogInState : true,
        TreeState : null
    };

    constructor(){
        this.listeners = [];
    }

    set(key: string, val: any) {
        this.state[key] = val;
        this.onStoreChanged();
    }

    setMany(dict: {}) {
        this.state = Object.assign(this.state, dict);
        this.onStoreChanged();
    }

    get(key: string) {
        return this.state[key] || null;
    }

    subscribe(listener :any){
        this.listeners.push(listener);
    }

    public onStoreChanged(){
        for(const listener of this.listeners){
            listener();
        }
    }

    static getInstance() {
        if (!StateStore.instance)
            StateStore.instance = new StateStore();
        return StateStore.instance;
    }
}

export default StateStore;