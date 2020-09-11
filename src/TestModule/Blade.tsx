import { IBladeComponentStore, IBladeStore, IUIContext, BladeComponent } from "@relatude/core";
import React = require("react");
import { Colors } from "@relatude/colors";
import { Button } from "@relatude/core/src/Components/Basic/Button/Button";
// import { Button } from "@relatude/core/lib/Components/Basic/Button/Button";

export class TestBladeStore implements IBladeComponentStore {
    setBladeDefaults(blade: IBladeStore): void { }
    context: IUIContext;
    blade: IBladeStore;
    constructor(context: IUIContext) {
        this.context = context;
    }
}
export class TestBlade extends BladeComponent<TestBladeStore> {
    render() {
        return (
            <div><Button color={Colors.amber50} text={"Test"} /></div>
            // <div>TEST</div>
        );
    }
}
