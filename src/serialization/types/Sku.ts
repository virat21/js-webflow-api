/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const Sku: core.serialization.ObjectSchema<serializers.Sku.Raw, Webflow.Sku> = core.serialization.object({
    id: core.serialization.string().optional(),
    cmsLocaleId: core.serialization.string().optional(),
    lastPublished: core.serialization.date().optional(),
    lastUpdated: core.serialization.date().optional(),
    createdOn: core.serialization.date().optional(),
    fieldData: core.serialization.lazyObject(async () => (await import("..")).SkuFieldData).optional(),
});

export declare namespace Sku {
    interface Raw {
        id?: string | null;
        cmsLocaleId?: string | null;
        lastPublished?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
        fieldData?: serializers.SkuFieldData.Raw | null;
    }
}
