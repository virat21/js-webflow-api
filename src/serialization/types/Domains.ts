/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const Domains: core.serialization.ObjectSchema<serializers.Domains.Raw, Webflow.Domains> =
    core.serialization.object({
        customDomains: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).Domain))
            .optional(),
    });

export declare namespace Domains {
    interface Raw {
        customDomains?: serializers.Domain.Raw[] | null;
    }
}