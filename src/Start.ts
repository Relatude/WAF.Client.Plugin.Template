import { Start, UIContext, Config } from "@relatude/core"
import { TestModule } from "./TestModule/Module";
export var lastContext: UIContext;
(window as any).waf = this;

export function start(container: Element, autoServerAddress: boolean, serverAddress: string, inlineEditSrc: string): Promise<void> {
    const config = new Config();
    config.runUrlCommandsAfterFirstLogin = true;
    config.autoServerAddress = autoServerAddress;
    config.serverAddress = serverAddress;
    config.inlineEditSrc = inlineEditSrc;
    config.includeCoreModules = true;
    config.modules = [TestModule];
    return Start.edit(container, config).then(context => {
        context.automation.login("http://localhost:63021/", "m", "m");
        lastContext = context;
        document.body.style.backgroundColor = "transparent";
    });
}
// export function startPreview(containerName:string, context: UIContext, url: string): Promise<PreviewStore> {
//     lastContext = context;
//     return Start.preview(document.getElementById(containerName), context, url);
// }


