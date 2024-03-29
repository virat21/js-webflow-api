/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         displayName: "Blog Posts",
 *         singularName: "Blog Post",
 *         slug: "posts"
 *     }
 */
export interface CollectionsCreateRequest {
    /** Name of the collection. Each collection name must be distinct. */
    displayName: string;
    /** Singular name of each item. */
    singularName: string;
    /** Part of a URL that identifier */
    slug?: string;
}