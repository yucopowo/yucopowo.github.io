import style from 'style-to-object';

export function parseStyle(value, tagName = 'unknown') {
    /** @type {Record<string, string>} */
    const result = {}

    try {
        style(value, (name, value) => {
            if (name.slice(0, 4) === '-ms-') name = 'ms-' + name.slice(4)

            result[
                name.replace(
                    /-([a-z])/g,
                    /**
                     * @param {string} _
                     * @param {string} $1
                     * @returns {string}
                     */
                    (_, $1) => $1.toUpperCase()
                )
                ] = value
        })
    } catch (error_) {
        const error = /** @type {Error} */ (error_)
        error.message =
            tagName + '[style]' + error.message.slice('undefined'.length)
        throw error
    }

    return result
}
