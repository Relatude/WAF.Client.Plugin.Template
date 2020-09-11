import { IPlugin, IUIContext, IModule } from "@relatude/core";
import { TestModule } from "./TestModule/Module";

export class Plugin implements IPlugin {
    getModules(context: IUIContext): IModule[] {
        return [
            new TestModule(context),
        ];
    }
}
