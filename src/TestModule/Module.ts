import { IModule, IUIContext, MenuItemStore } from "@relatude/core";
import { Icons } from "@relatude/icons";
import { TestBladeStore, TestBlade } from "./Blade";

export class TestModule implements IModule {
    private _context: IUIContext;
    moduleName: string = "Test";
    constructor(context: IUIContext) {
        this._context = context;
    }
    getMenuItems(): MenuItemStore[] {
        return [
            new MenuItemStore("Test", Icons.fire, this.onClick),
        ];        
    }
    onClick = async (pinned: boolean, newWindow: boolean) => {
        let store = new TestBladeStore(this._context);        
        var blade = await this._context.ui.body.openBlade(TestBlade, store, pinned ? "pinnedFirst" : "first");
    }
}