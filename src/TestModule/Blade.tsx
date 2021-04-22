import React = require("react");
import { BladeComponent, IBladeComponentStore, IBladeStore, IUIContext } from "@relatude/core";
import { Icons } from "@relatude/icons";
import { TestComponent } from "./TestComponent";

export class TestBladeStore implements IBladeComponentStore {
    setBladeDefaults(blade: IBladeStore): void {
        blade.name = "My module";
        blade.iconSvg = Icons.fire;
        blade.width = 800;
    }
    context: IUIContext;
    blade: IBladeStore;
    constructor(context: IUIContext) {
        this.context = context;
    }
}
export class TestBlade extends BladeComponent<TestBladeStore> {
    render() {
        return (
            <TestComponent context={this.props.context} />
        );
    }
}
