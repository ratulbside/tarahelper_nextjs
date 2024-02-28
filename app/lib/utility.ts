export function removeTextAndConvertToNumber(text: string): number | null {
    // Remove all characters except numbers, ".", "+" or "-".
    const numberString: string = text.replace(/[^0-9\-+\.]/g, "");

    // If the string is empty or contains only non-numeric characters, return null.
    if (!numberString) {
        return null;
    }

    // Try to convert the string to a number.
    return parseFloat(numberString);
}

export function arrayToString(array: any[]): string {
    return array ? array.join(', ') : '';
}

/**
* Retrieve the book title with optional subtitle.
*
* @param {string} title - the main title of the book
* @param {string} subtitle - the optional subtitle of the book
* @return {string} the complete book title including the subtitle if available
*/
export function getBookTitle(titleNode: string, subtitleNode: string): string {
    const title: string = titleNode || '';
    const subtitle: string = subtitleNode || '';
    return subtitle ? `${title} - ${subtitle}` : title;
}

export function createFeaturesString(authors: string, publisher: string, isbn13: number, isbn10: number, pages: number, publishedDate: string, maturityRating: string): string {
    const features: string[] = [];

    if (authors && authors.trim()) {
        features.push(`Author(s):${authors.trim()}:1:1`);
    }

    if (publisher && publisher.trim()) {
        features.push(`Publisher:${publisher.trim()}:2:0`);
    }

    if (isbn13 && isbn13.toString().trim()) {
        features.push(`ISBN13:${isbn13.toString().trim()}:3:1`);
    }

    if (isbn10 && isbn10.toString().trim()) {
        features.push(`ISBN10:${isbn10.toString().trim()}:4:1`);
    }

    if (pages && pages.toString().trim()) {
        features.push(`Pages:${pages.toString().trim()}:5:1`);
    }

    if (publishedDate && publishedDate.toString().trim()) {
        features.push(`published Date:${publishedDate.toString().trim()}:6:1`);
    }

    if (maturityRating && maturityRating.trim()) {
        features.push(`Maturity Rating:${publishedDate.trim()}:7:1`);
    }

    return features.join(',');
}