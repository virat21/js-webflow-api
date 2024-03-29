/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const Scripts: core.serialization.Schema<serializers.Scripts.Raw, Webflow.Scripts> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("..")).ScriptApply)
);

export declare namespace Scripts {
    type Raw = serializers.ScriptApply.Raw[];
}