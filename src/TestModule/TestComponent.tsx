import React from "react";
import { IUIContext } from "@relatude/core";
interface props {
    context: IUIContext;
}
interface state {
}
export class TestComponent extends React.Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>Hello world!</div>
        );
    }
}
