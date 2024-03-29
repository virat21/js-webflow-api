/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         hostedLocation: "hostedLocation",
 *         integrityHash: "integrityHash",
 *         version: "version",
 *         displayName: "displayName"
 *     }
 */
export interface CustomCodeHostedRequest {
    /** URI for an externally hosted script location */
    hostedLocation: string;
    /** Sub-Resource Integrity Hash */
    integrityHash: string;
    /** Define whether the script can be copied on site duplication and transfer */
    canCopy?: boolean;
    /** A Semantic Version (SemVer) string, denoting the version of the script */
    version: string;
    /** User-facing name for the script */
    displayName: string;
}